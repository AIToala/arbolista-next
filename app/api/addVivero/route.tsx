import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { owner, name, address, phone, email, website, logoSrc } =
    await request.json();
  const nursery = await prisma.nursery.create({
    data: {
      owner,
      name,
      address,
      phone,
      email,
      website,
      logoSrc,
    },
  });
  return NextResponse.json(nursery);
}
