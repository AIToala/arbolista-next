/* eslint-disable @typescript-eslint/no-floating-promises */
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (imagePath: string): Promise<string> => {
  return await new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imagePath, (error, result) => {
      if (error !== null && error !== undefined) {
        reject(error);
      } else if (result?.url !== null && result?.url !== undefined) {
        resolve(result.url);
      } else {
        reject(new Error("Failed to upload image."));
      }
    });
  });
};

export { uploadImage };
