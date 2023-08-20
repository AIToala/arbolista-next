import prisma from "@/app/libs/prismadb";

interface IParams {
  id?: string;
}

export default async function getNurseryById(params: IParams) {
  try {
    const { id } = params;
    const query: any = {};
    if (id != null) query.id = id;

    const nursery = await prisma.nursery.findUnique({
      select: {
        id: true,
        name: true,
        address: true,
        email: true,
        phone: true,
        website: true,
        logoSrc: true,
        owner: true,
      },
      where: query,
    });
    if (nursery == null) return null;
    return {
      ...nursery,
    };
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
