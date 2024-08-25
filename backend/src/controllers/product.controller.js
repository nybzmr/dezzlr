import { Product } from "../models/product.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";
import { User } from "../models/user.model.js";
import { Seller } from "../models/seller.model.js";

export const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, stock, category } = req.body;

  if (!name || !description || !price || !stock || !category || !req.file) {
    return res.status(400).json(new ApiError(400, "All fields are required"));
  }
  console.log("User ID:", req.user?._id);

  const user = await User.findById(req.user._id);
  if (!user.isSeller) {
    return res
      .status(403)
      .json(new ApiError(403, "You are not authorized to add products"));
  }
  const sellerId = user.seller;

  const uploadResult = await uploadOnCloudinary(req.file.path);

  fs.unlinkSync(req.file.path);

  if (!uploadResult) {
    return res.status(500).json(new ApiError(500, "Image upload failed"));
  }

  const product = new Product({
    name,
    description,
    price,
    stock,
    category,
    seller: sellerId,
    imageUrl: uploadResult.secure_url,
  });

  await product.save();
  const seller = await Seller.findById(sellerId);
  if (seller) {
    seller.products.push(product._id);
    await seller.save();
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "Product added successfully", product));
});
