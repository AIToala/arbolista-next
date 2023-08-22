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
  try {
    const { id, owner, name, address, phone, email, website, logoSrc } =
      await request.json();
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
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
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
