import prisma from "@/app/libs/prismadb";

export async function getNurseryAdminUsers() {
  try {
    const users = await prisma.user.findMany({
      where: {
        userRole: "NURSERY_ADMIN",
      },
      select: {
        name: true,
      },
    });
    return users.map((user) => user.name).filter((name) => name !== null);
  } catch (error: any) {
    return [];
  }
}
