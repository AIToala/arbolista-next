import { PrismaClient, type Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const viveros: Prisma.NurseryCreateInput[] = [
  {
    id: "1",
    name: "Viveros GYE",
    owner: {
      connect: {
        id: "cll9123em0000meo4v687dyed",
      },
    },
    address: "KM 20 Autopista Duran - Boliche",
    phone: "0993040651",
    email: "viverogye@gmail.com",
    website: "https://viverosgye.com",
    logoSrc:
      "https://pbs.twimg.com/profile_images/1849031350/vivero_jarrin_400x400.jpg",
  },
];

async function createViveros() {
  for (const vivero of viveros) {
    await prisma.nursery.create({
      data: vivero,
    });
  }
}
createViveros()
  .then(async () => {
    console.log("Viveros created");
  })
  .catch(async (e) => {
    console.error(e);
  });
