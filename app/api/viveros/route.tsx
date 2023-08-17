import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    id,
    owner,
    name,
    address,
    phone,
    email,
    website,
    logoSrc,
    nurserySpecies,
  } = await request.json();

  if (nurserySpecies != null && nurserySpecies.length > 0) {
    for (const specie of nurserySpecies) {
      const specieId = specie.id;
      const specieAmount = specie.amount;
      const specieHeight = specie.height;
      prisma.nurserySpecies
        .create({
          data: {
            nurseryId: id,
            speciesId: specieId,
            speciesAmount: specieAmount,
            speciesHeight: specieHeight,
          },
        })
        .then(async () => {
          console.log("Nursery Species Table created");
        })
        .catch(async (e) => {
          console.error(e);
        });
    }
  }

  const vivero = await prisma.nursery.create({
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
  return NextResponse.json(vivero);
}

export async function PUT(request: Request) {
  const {
    id,
    owner,
    name,
    address,
    phone,
    email,
    website,
    logoSrc,
    nurserySpecies,
    deletedSpecies,
  } = await request.json();
  if (deletedSpecies != null && deletedSpecies.length > 0) {
    for (const specie of deletedSpecies) {
      const specieId = specie.id;
      await prisma.nurserySpecies
        .delete({
          where: {
            nurseryId_speciesId: {
              nurseryId: id,
              speciesId: specieId,
            },
          },
        })
        .then(async () => {
          console.log("Nursery Species Table deleted some species");
        })
        .catch(async (e) => {
          console.error(e);
        });
    }
  }
  if (nurserySpecies != null && nurserySpecies.length > 0) {
    for (const specie of nurserySpecies) {
      const specieId = specie.id;
      const specieAmount = specie.amount;
      const specieHeight = specie.height;
      await prisma.nurserySpecies
        .update({
          where: {
            nurseryId_speciesId: {
              nurseryId: id,
              speciesId: specieId,
            },
          },
          data: {
            speciesAmount: specieAmount,
            speciesHeight: specieHeight,
          },
        })
        .then(async () => {
          console.log("Nursery Species Table updated");
        })
        .catch(async (e) => {
          console.error(e);
        });
    }
  }

  const nursery = await prisma.nursery.update({
    where: { id },
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

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const nursery = await prisma.nursery.delete({
    where: { id },
  });
  return NextResponse.json(nursery);
}
