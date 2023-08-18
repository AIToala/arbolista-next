import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { id, isInGallery } = await request.json();
  console.log(id, isInGallery);
  let species;
  if (id !== null) {
    try {
      species = await prisma.species.update({
        where: { id },
        data: { isInGallery },
      });
      console.log("Synonyms updated");
    } catch (e) {
      console.error(e);
    }
  }
  return NextResponse.json(species);
}
