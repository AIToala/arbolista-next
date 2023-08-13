import { PrismaClient, type Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    id: "cll9123em0000meo4v687dyed",
    name: "Admin",
    email: "admin@floranativagye.com",
    hashedPassword:
      "$2a$12$VeHepNjdEhpgVL6cG2USMum90C0A4PxZPudy9iGJ34Zm.kl6OUvf.",
    userRole: "ADMIN",
  },
];

async function createUsers() {
  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }
}
createUsers()
  .then(async () => {
    console.log("Users created");
  })
  .catch(async (e) => {
    console.error(e);
  });
