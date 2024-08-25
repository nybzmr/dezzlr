import { Product } from "../models/product.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";
import { User } from "../models/user.model.js";
import { Seller } from "../models/seller.model.js";

const addProduct = asyncHandler(async (req, res) => {
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

const addToCart = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return res.status(400).json(new ApiError(400, "Product ID and quantity are required"));
    }

    
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json(new ApiError(404, "Product not found"));
    }

    
    if (product.stock < quantity) {
        return res.status(400).json(new ApiError(400, `Only ${product.stock} items in stock`));
    }

   
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json(new ApiError(404, "User not found"));
    }

    
    const existingCartItem = user.cart.find(item => item.product.toString() === productId);
    if (existingCartItem) {
        
        if (existingCartItem.quantity + quantity > product.stock) {
            return res.status(400).json(new ApiError(400, `Adding ${quantity} more exceeds stock. Only ${product.stock - existingCartItem.quantity} items can be added.`));
        }
        existingCartItem.quantity += quantity;
    } else {
       
        user.cart.push({
            product: productId,
            quantity,
        });
    }

    
    await user.save();

    return res.status(200).json(new ApiResponse(200, "Product added to cart successfully", user.cart));
});

export {addProduct,addToCart};