import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
export const verifyJWT = asyncHandler(async (req, res, next) => {
    const token=req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
    if (!token) {
        return res.status(401).json(new ApiError(401, "Unauthorized"));
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = await User.findById(decoded?._id).select("-password -refreshToken");
        if(!req.user){
            return res.status(401).json(new ApiError(401, "Unauthorized"));
        }
        next();
    } catch (error) {
        return res.status(401).json(new ApiError(401, "Unauthorized"));
    }  
    
});