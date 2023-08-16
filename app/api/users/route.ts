import prisma from "@/app/libs/prismadb";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { email, name, password, userRole } = await request.json();
  const hashedPassword = await bcryptjs.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
      userRole,
    },
  });

  return NextResponse.json(user);
}

export async function PUT(request: Request) {
  const { id, email, name, password, userRole } = await request.json();
  const hashedPassword = await bcryptjs.hash(password, 12);
  const updatedUser = await prisma.user.update({
    where: { id: String(id) },
    data: {
      email,
      name,
      hashedPassword,
      userRole,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  console.log(id);
  const deletedUser = await prisma.user.delete({
    where: { id: String(id) },
  });

  return NextResponse.json(deletedUser);
}
