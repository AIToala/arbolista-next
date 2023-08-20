import prisma from "@/app/libs/prismadb";
import { type Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { owner, name, address, phone, email, website, logoSrc } =
      await request.json();

    if (owner == null) {
      return NextResponse.error();
    }
    const viveroExiste = await prisma.nursery.findUnique({
      where: {
        name,
      },
    });
    if (viveroExiste !== null) {
      return NextResponse.error();
    }

    const viveroData: Prisma.NurseryCreateInput = {
      owner: {
        connect: {
          id: owner,
        },
      },
      name,
      address,
      phone,
      email,
      website,
      logoSrc,
    };

    const vivero = await prisma.nursery.create({
      data: viveroData,
    });

    return NextResponse.json(vivero);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
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
      owner: {
        connect: owner,
      },
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
  try {
    const { id } = await request.json();
    const nursery = await prisma.nursery.delete({
      where: { id },
    });
    return NextResponse.json(nursery);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
