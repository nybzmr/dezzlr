import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Seller } from "../models/seller.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const addSeller = asyncHandler(async (req, res) => {
    const { shopName, contactPerson, email, phone, address } = req.body;

    
    if (!shopName || !contactPerson || !email || !phone || !address) {
        return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    
    const { street, city, state, postalCode, country } = address;
    if (!street || !city || !state || !postalCode || !country) {
        return res.status(400).json(new ApiError(400, "Incomplete address details"));
    }

    
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
        return res.status(400).json(new ApiError(400, "Seller with this email already exists"));
    }

   
    const seller = new Seller({
        shopName,
        contactPerson,
        email,
        phone,
        address: {
            street,
            city,
            state,
            postalCode,
            country,
        },
        products: [],
         
    });
    const user=await User.findById(req.user._id);
    user.isSeller = true;
    user.seller = seller._id;
    await user.save();
    await seller.save();

    return res.status(201).json(new ApiResponse(201, "Seller created successfully", seller));
});

const getSellerDetails = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
  
    try {
      const user = await User.findById(userId).populate('seller'); 
      if (!user) {
        return res.status(404).json(new ApiError(404, "User not found"));
      }
      if (!user.isSeller) {
        return res.status(400).json(new ApiError(400, "User is not a seller"));
      }
      return res.status(200).json(new ApiResponse(200, "Seller details fetched successfully", user.seller));
    } catch (error) {
      return res.status(500).json(new ApiError(500, error.message));
    }
  });

export {addSeller,getSellerDetails};