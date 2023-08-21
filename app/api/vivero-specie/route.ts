import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { nurseryId, speciesId, speciesAmount, speciesHeight } =
      await request.json();
    if (
      nurseryId == null ||
      speciesId == null ||
      speciesAmount == null ||
      speciesHeight == null
    ) {
      return NextResponse.error();
    }
    if (
      typeof speciesAmount !== "number" ||
      typeof speciesHeight !== "number"
    ) {
      return NextResponse.error();
    }
    if (speciesAmount < 0 || speciesHeight < 0) {
      return NextResponse.error();
    }
    const nurserySpecie = await prisma.nurserySpecies.create({
      data: {
        nurseryId,
        speciesId,
        speciesAmount,
        speciesHeight,
      },
    });
    return NextResponse.json(nurserySpecie);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(request: Request) {
  try {
    const { nurseryId, speciesId, speciesAmount, speciesHeight } =
      await request.json();
    if (
      nurseryId == null ||
      speciesId == null ||
      speciesAmount == null ||
      speciesHeight == null
    ) {
      return NextResponse.error();
    }
    if (
      typeof speciesAmount !== "number" ||
      typeof speciesHeight !== "number"
    ) {
      return NextResponse.error();
    }
    if (speciesAmount < 0 || speciesHeight < 0) {
      return NextResponse.error();
    }
    const nurserySpecie = await prisma.nurserySpecies.update({
      where: {
        nurseryId_speciesId: {
          nurseryId,
          speciesId,
        },
      },
      data: {
        speciesAmount,
        speciesHeight,
      },
    });
    return NextResponse.json(nurserySpecie);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: Request) {
  try {
    const { nurseryId, speciesId } = await request.json();
    if (nurseryId == null || speciesId == null) {
      return NextResponse.error();
    }
    const nurserySpecie = await prisma.nurserySpecies.delete({
      where: {
        nurseryId_speciesId: {
          nurseryId,
          speciesId,
        },
      },
    });
    return NextResponse.json(nurserySpecie);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
