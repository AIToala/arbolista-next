import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { id, isInGallery } = await request.json();
  console.log(id, isInGallery);

  const species = await prisma.species.update({
    where: { id },
    data: { isInGallery },
  });

  return NextResponse.json(species);
}
