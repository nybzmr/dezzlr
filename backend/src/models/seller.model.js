import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  orderDate: { type: Date, default: Date.now },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
});

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
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    orders: [orderSchema]
  });
export const Seller = mongoose.model('Seller', sellerSchema);