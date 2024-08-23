import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
    const { fullname, email, password } = req.body;

    if (!fullname || !email ) {
        return res.status(400).json(new ApiError(400, "Invalid data"));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json(new ApiError(400, "User already exists"));
    }

    const user = await User.create({ fullname, email, password });
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        return res.status(500).json(new ApiError(500, "Internal problem"));
    }

    return res.status(201).json(new ApiResponse(200, "User created", createdUser));
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json(new ApiError(400, "Invalid data"));
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json(new ApiError(401, "Invalid credentials"));
    }


    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
    const options={
        httpOnly:true,
        secure:true,
    }
    return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json(new ApiResponse(200, "User logged in", { loggedInUser}));

});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, { refreshToken: undefined }, { new: true });
    const options={
        httpOnly:true,
        secure:true,
    }
    return res.status(200).clearCookie("accessToken",options).clearCookie("refreshToken",options).json(new ApiResponse(200, "User logged out"));
});


const refreshAccessToken= asyncHandler(async(req,res)=>{
    const incomingRefreshToken=req.cookies.refreshToken || req.body.refreshToken;
    if(!incomingRefreshToken){
        return res.status(401).json(new ApiError(401,"No refresh token"));
    }
    try {
        const decodedToken=jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET);
        const user=await User.findById(decodedToken?._id);
        if(!user){
            return res.status(401).json(new ApiError(401,"No user found"));
        }
        if(user.refreshToken!==incomingRefreshToken){
            return res.status(401).json(new ApiError(401,"Invalid refresh token"));
        }
        const accessToken=await user.generateAccessToken();
        const refreshToken=await user.generateRefreshToken();
        user.refreshToken=refreshToken;
        await user.save({validateBeforeSave:false});
        const options={
            httpOnly:true,
            secure:true,
        }
        return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json(new ApiResponse(200,"Token refreshed",{accessToken}));
         
    } catch (error) {
        return res.status(401).json(new ApiError(401,"Invalid refresh token"));
        
    }


});

const addUserDetails = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
    const { mobile, address } = req.body;

    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json(new ApiError(404, "User not found"));
    }
    if (!mobile && !user.mobile ) {

        return res.status(400).json(new ApiError(400, "No contact details provided"));
    }
    else if(!(address && user.mobile)){
        return res.status(400).json(new ApiError(400, "No contact details provided"));
    }


    if (mobile) {
        user.mobile = mobile;
    }

    if (address) {
        const { street, city, state, pinCode } = address;
        if (street && city && state && pinCode) {
            user.addresses.push({ street, city, state, pinCode });
        } else {
            return res.status(400).json(new ApiError(400, "Incomplete address details"));
        }
    }

    await user.save();

    return res.status(200).json(new ApiResponse(200, "Contact details updated successfully", {
        mobile: user.mobile,
        addresses: user.addresses,
    }));
});
    
export { registerUser,loginUser,logoutUser,refreshAccessToken,addUserDetails };
