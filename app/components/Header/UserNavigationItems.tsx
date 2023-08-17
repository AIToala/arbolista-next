"use client";

import { type TokenizedUser } from "@/app/types";
import { Info, LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface UserNavigationItemsProps {
  currentUser?: TokenizedUser | null;
}

const UserNavigationItems: React.FC<UserNavigationItemsProps> = ({
  currentUser,
}) => {
  const router = useRouter();
  return (
    <>
      {currentUser?.userRole === "ADMIN" ||
      currentUser?.userRole === "SPECIES_ADMIN" ||
      currentUser?.userRole === "NURSERY_ADMIN" ? (
        <div
          onClick={() => {
            router.push("/dashboard");
          }}
          className="flex flex-row items-center"
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </div>
      ) : (
        <div
          onClick={() => {
            router.push("/home");
          }}
        >
          <Info className="mr-2 h-4 w-4" />
          Bienvenido, espere autorización
        </div>
      )}
    </>
  );
};

export default UserNavigationItems;
