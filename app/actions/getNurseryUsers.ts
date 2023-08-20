import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export default async function getNurseryUser() {
  try {
    const currentUser = await getCurrentUser();
    if (currentUser == null || currentUser.userRole !== "ADMIN") {
      return null;
    }
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
      where: { userRole: "NURSERY_ADMIN" },
    });
    if (users == null) {
      return null;
    }
    return { ...users };
  } catch (error) {
    return null;
  }
}
