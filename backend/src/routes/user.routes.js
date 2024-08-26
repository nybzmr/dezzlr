import { Router } from "express";
import { registerUser,loginUser, logoutUser,refreshAccessToken, addUserDetails,getCartDetails,placeOrder, googleLogin } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router= Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/google").post(googleLogin);
router.route("/refreshtoken").post(refreshAccessToken);
router.route("/adddetails").post(verifyJWT,addUserDetails);
router.route("/get-cart").get(verifyJWT,getCartDetails);
router.route("/place-order").post(verifyJWT,placeOrder);


export default router;   