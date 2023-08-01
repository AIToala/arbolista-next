"use client";

import type { TokenizedUser } from "@/app/types";
import { type IconType } from 'react-icons';
import { Sidebar } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { RiHome2Fill, RiPlantFill } from "react-icons/ri";

interface SidebarProps {
  currentUser?: TokenizedUser | null;
}

const generateSidebarCollapse = (label: string, icon: IconType, route: string,router: ReturnType<typeof useRouter>) => (
  
  <Sidebar.Collapse label={label} icon={icon}>
    <Sidebar.Item
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push(route);
      }}
      href={route}
    >
      Agregar {label}
    </Sidebar.Item>
    <Sidebar.Item
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.push("/dashboard/gestionar");
      }}
      href="/dashboard/gestionar"
    >
      Gestionar {label}
    </Sidebar.Item>
  </Sidebar.Collapse>
);
// eslint-disable-next-line no-unused-vars
const SidebarC: React.FC<SidebarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <aside>
      <Sidebar className="sidebar" color="!green" style={{ height: "100vh" }}>
        <Sidebar.Logo href="#" img="/images/logo.svg" imgAlt="logo">
          <p>Arborista</p>
          <p>{currentUser?.name}</p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {currentUser?.userRole === "ADMIN" && (
                <>
                  {generateSidebarCollapse("Usuarios", FaUserAlt, "/dashboard/usuario", router)}
                </>
              )}
              {(currentUser?.userRole === "ADMIN" || currentUser?.userRole === "SPECIES_ADMIN") && (
                <>
                  {generateSidebarCollapse("Especies", RiPlantFill, "/dashboard/especie", router)}
                </>
              )}
              {(currentUser?.userRole === "ADMIN" || currentUser?.userRole === "NURSERY_ADMIN") && (
                <>
                  {generateSidebarCollapse("Viveros", GiPlantsAndAnimals, "/dashboard/vivero", router)}
                </>
              )}
            <Sidebar.Item href="/home" icon={RiHome2Fill}>
              <p>Regreso al Inicio</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </aside>
  );
};

export default SidebarC;
