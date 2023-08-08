import { PrismaClient, type Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const familyData: Prisma.SpeciesFamilyDetailCreateInput[] = [
  {
    family: "Anacardiaceae",
  },
  {
    family: "Annonaceae",
  },
  {
    family: "Boraginaceae",
  },
  {
    family: "Polygonaceae",
  },
  {
    family: "Sapindaceae",
  },
  {
    family: "Fabaceae",
  },
  {
    family: "Malvaceae",
  },
  {
    family: "Meliaceae",
  },
  {
    family: "Malpighiaceae",
  },
  {
    family: "Myrtaceae",
  },
  {
    family: "Euphorbiaceae",
  },
  {
    family: "Bixaceae",
  },
  {
    family: "Bignoniaceae",
  },
];
async function createFamilies() {
  for (const family of familyData) {
    await prisma.speciesFamilyDetail.create({
      data: family,
    });
  }
}
createFamilies()
  .then(async () => {
    console.log("Families created");
  })
  .catch(async (e) => {
    console.error(e);
  });
