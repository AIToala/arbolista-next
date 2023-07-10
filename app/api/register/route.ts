import prisma from "@/app/libs/prismadb";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { email, name, password } = await request.json();
  const hashedPassword = await bcryptjs.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
