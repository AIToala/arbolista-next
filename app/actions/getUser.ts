import prisma from "@/app/libs/prismadb";

export interface IUserParams {
  id?: string;
  name?: string;
  email?: string;
  userRole?: string;
}

export default async function getUser(params: IUserParams) {
  try {
    const { id, name, email, userRole } = params;

    const query: any = {};

    if (id != null) query.id = id;
    if (name != null) query.name = name;
    if (email != null) query.email = email;
    if (userRole != null) query.userRole = userRole;

    const users = await prisma.user
      .findMany({
        where: query,
        orderBy: {
          name: "asc",
        },
      })
      .then((users: any[]) =>
        users.map((user) => ({
          ...user,
          role:
            user.userRole === "SPECIES_ADMIN"
              ? "Botanico"
              : user.userRole === "NURSERY_ADMIN"
              ? "Viverista"
              : user.userRole,
          name: user.name !== null ? user.name : "",
          email: user.email !== null ? user.email : "",
        }))
      );
    return users;
  } catch (error: any) {
    return [];
  }
}
