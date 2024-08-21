import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    shopName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true }
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }] 
  });
export const Seller = mongoose.model('Seller', sellerSchema);