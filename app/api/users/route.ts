import getCurrentUser from "@/app/actions/getCurrentUser";
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
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });
    return NextResponse.json(updatedUser);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const currentUser = await getCurrentUser();
    if (currentUser == null) {
      return NextResponse.error();
    }
    if (currentUser.userRole === "ADMIN" && id === currentUser.id) {
      return NextResponse.error();
    }
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json(deletedUser);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function GET(request: Request) {
  const { id } = await request.json();
  console.log(id, "hi");
  await prisma.user
    .findUnique({
      select: {
        id: true,
        email: true,
        name: true,
        userRole: true,
      },
      where: { id },
    })
    .then((user) => {
      return NextResponse.json(user);
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.error();
    });
}
