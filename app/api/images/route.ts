/* eslint-disable @typescript-eslint/no-floating-promises */
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function POST(request: Request) {
  try {
    const { imagePath } = await request.json();
    const res = cloudinary.uploader.upload(
      imagePath,
      (error: any, result: any) => {
        if (error !== null && error !== undefined) {
          return NextResponse.error();
        } else if (result?.url !== null && result?.url !== undefined) {
          return NextResponse.json(result.url);
        } else {
          return NextResponse.error();
        }
      }
    );
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
