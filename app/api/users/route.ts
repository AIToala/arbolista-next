/* eslint-disable @typescript-eslint/no-misused-promises */
import prisma from "@/app/libs/prismadb";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const { email, name, password, userRole } = await request.json();
    const hashedPassword = await bcryptjs.hash(password, 12);
    const user = await prisma.user
      .create({
        data: {
          email,
          name,
          hashedPassword,
          userRole,
        },
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(request: Request) {
  try {
    const { id, email, name, password } = await request.json();
    const updatedData: {
      email?: string;
      name?: string;
      hashedPassword?: string;
    } = { email, name };
    if (password !== null && password !== undefined && password !== "") {
      const hashedPassword = await bcryptjs.hash(password, 12);
      updatedData.hashedPassword = hashedPassword;
    }
    const updatedUser = await prisma.user
      .update({
        where: { id },
        data: updatedData,
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    return NextResponse.json(updatedUser);
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
    const deletedUser = await prisma.user
      .delete({
        where: { id },
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    return NextResponse.json(deletedUser);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request: Request) {
  try {
    const { id } = await request.json();
    const user = await prisma.user
      .findUnique({
        select: {
          id: true,
          email: true,
          name: true,
          userRole: true,
        },
        where: { id },
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect();
  }
}
