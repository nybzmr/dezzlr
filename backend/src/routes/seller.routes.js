import { Router } from "express";
import { addSeller, getSellerDetails } from "../controllers/seller.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router= Router();

router.route("/addseller").post(verifyJWT,addSeller);
router.route("/sellerdetails").get(verifyJWT,getSellerDetails);

export default router;
