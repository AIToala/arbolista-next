import prisma from "@/app/libs/prismadb";
export interface IUserParams {
  id?: string;
  name?: string;
  email?: string;
  userRole?: string;
}

export default async function getSafeUser(params: IUserParams) {
  try {
    const { id, name, email, userRole } = params;

    const query: any = {};

    if (id != null) query.id = id;
    if (name != null) query.name = name;
    if (email != null) query.email = email;
    if (userRole != null) query.userRole = userRole;

    const users = await prisma.user.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        userRole: true,
      },
      where: query,
    });

    if (users == null) return null;
    const safeUser = {
      ...users,
      userRole:
        users.userRole === "SPECIES_ADMIN"
          ? "Botánico"
          : users.userRole === "NURSERY_ADMIN"
          ? "Viverista"
          : users.userRole,
      name: users.name !== null ? users.name : "",
      email: users.email !== null ? users.email : "",
    };

    return safeUser;
  } catch (error: any) {
    return [];
  }
}
