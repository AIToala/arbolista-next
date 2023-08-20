/* eslint-disable @typescript-eslint/no-misused-promises */
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const { id, isInGallery } = await request.json();
    const species = await prisma.species
      .update({
        where: { id },
        data: { isInGallery },
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return NextResponse.json(species);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
