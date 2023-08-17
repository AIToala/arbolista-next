"use client";

import { type TokenizedUser } from "@/app/types";
import { Info, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";

interface UserNavigationItemsProps {
  currentUser?: TokenizedUser | null;
}

const UserNavigationItems: React.FC<UserNavigationItemsProps> = ({
  currentUser,
}) => {
  return (
    <>
      {currentUser?.userRole === "ADMIN" ||
      currentUser?.userRole === "SPECIES_ADMIN" ||
      currentUser?.userRole === "NURSERY_ADMIN" ? (
        <Link href="/dashboard" className="flex flex-row items-center">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Link>
      ) : (
        <Link href="#" className="">
          <Info className="mr-2 h-4 w-4" />
          Bienvenido, espere autorización
        </Link>
      )}
    </>
  );
};

export default UserNavigationItems;
