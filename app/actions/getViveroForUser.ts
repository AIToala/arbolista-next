import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getViveroForUser() {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id || currentUser.userRole !== "NURSERY_ADMIN") return [];
  try {
    const viveros = await prisma.nursery.findUnique({
      include: {
        species: true,
      },
      where: {
        ownerId: currentUser.id,
      },
    });
    if (!viveros) return [];
    return viveros;
  } catch (error: any) {
    return [];
  }
}
