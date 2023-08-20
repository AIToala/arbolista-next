import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (session?.user?.email == null) return null;
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (currentUser == null) return null;
    return {
      ...currentUser,
    };
  } catch (error: any) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
