import express from "express";
import { addProduct,addToCart } from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/add-product").post(verifyJWT,upload.single("image"), addProduct);
router.route("/add-to-cart").post(verifyJWT, addToCart);

export default router;
