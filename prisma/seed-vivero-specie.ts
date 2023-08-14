import { PrismaClient, type Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const viveroProducts: Prisma.NurserySpeciesCreateInput[] = [
  {
    nursery: {
      connect: {
        id: "1",
      },
    },
    species: {
      connect: {
        id: "cll90786b0000mexwj8pmrmci",
      },
    },
    speciesAmount: 10,
    speciesHeight: 20,
  },
];

async function createViveroProducts() {
  for (const viveroProduct of viveroProducts) {
    await prisma.nurserySpecies.create({
      data: viveroProduct,
    });
  }
}
createViveroProducts()
  .then(async () => {
    console.log("Vivero Products created");
  })
  .catch(async (e) => {
    console.error(e);
  });
