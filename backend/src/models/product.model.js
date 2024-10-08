import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        stock: {
            type: Number,
            required: true,
            trim: true,
        },
        category: { type: String, required: true },
        seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },
        imageUrl: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);
export const Product = mongoose.model("Product", productSchema);