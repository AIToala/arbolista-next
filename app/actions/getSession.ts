import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOpt";

export default async function getSession() {
  return await getServerSession(authOptions);
}
