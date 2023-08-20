import prisma from "@/app/libs/prismadb";

export default async function getNurseryUser() {
  try {
    const nurseryUser = await prisma.user.findMany({
      select: {
        name: true,
        id: true,
      },
      where: {
        userRole: "NURSERY_ADMIN",
      },
    });
    if (nurseryUser == null) return null;
    return {
      ...nurseryUser,
    };
  } catch (error: any) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
