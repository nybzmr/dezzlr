import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (loacalFilePath) => {
  try {
    if (!loacalFilePath) {
      return null;
    }
    const res = await cloudinary.uploader.upload(loacalFilePath, {
      resource_type: "image",
    });
    console.log("Image uploaded successfully", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(loacalFilePath);
    return null;
  }
};

export default uploadOnCloudinary;
