import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export default async function getNurseryUsers() {
  try {
    const currentUser = await getCurrentUser();
    if (currentUser == null || currentUser.userRole !== "ADMIN") {
      return [];
    }
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
      },
      where: { userRole: "NURSERY_ADMIN" },
    });
    if (users == null) {
      return [];
    }
    return {
      ...users,
    };
  } catch (error) {
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
