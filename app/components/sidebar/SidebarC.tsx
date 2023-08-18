"use client";

import type { TokenizedUser } from "@/app/types";
import { Sidebar } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
import { type IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { RiHome2Fill, RiPlantFill } from "react-icons/ri";
import { PiPottedPlantBold } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";

interface SidebarProps {
  currentUser?: TokenizedUser | null;
}

const generateSidebarCollapse = (
  label: string,
  icon: IconType,
  route: string,
  router: ReturnType<typeof useRouter>
) => {
  const formattedLabel = label.toLowerCase().replace(/s$/, "");
  return (
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
          router.push(`/dashboard/${formattedLabel}/gestionar`);
        }}
        href={`/dashboard/${formattedLabel}/gestionar`}
      >
        Gestionar {label}
      </Sidebar.Item>
    </Sidebar.Collapse>
  );
};

const generateOneSidebarCollapse = (
  label: string,
  icon: IconType,
  route: string,
  router: ReturnType<typeof useRouter>
) => {
  const formattedLabel = label.toLowerCase().replace(/s$/, "");
  return (
    <Sidebar.Collapse label={label} icon={icon}>
      <Sidebar.Item
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          router.push(`/dashboard/${formattedLabel}/gestionar`);
        }}
        href={`/dashboard/${formattedLabel}/gestionar`}
      >
        Gestionar {label}
      </Sidebar.Item>
    </Sidebar.Collapse>
  );
};

// eslint-disable-next-line no-unused-vars
const SidebarC: React.FC<SidebarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <aside>
      <Sidebar className="sidebar h-full min-h-[100vh]" color="!green">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {currentUser?.userRole === "ADMIN" && (
              <>
                {generateSidebarCollapse(
                  "Usuarios",
                  FaUserAlt,
                  "/dashboard/usuario",
                  router
                )}
                {generateSidebarCollapse(
                  "Viveros",
                  GiPlantsAndAnimals,
                  "/dashboard/vivero",
                  router
                )}
                {generateOneSidebarCollapse(
                  "Galeria",
                  TfiGallery,
                  "/dashboard/viveros",
                  router
                )}
                <Sidebar.Collapse
                  label="Especies de vivero"
                  icon={PiPottedPlantBold}
                >
                  <Sidebar.Item
                    onClick={() => {
                      router.push(`/dashboard/vivero-especies/gestionar`);
                    }}
                    href={`/dashboard/vivero-especies/gestionar`}
                  >
                    Gestionar especies del vivero
                  </Sidebar.Item>
                </Sidebar.Collapse>
              </>
            )}
            {(currentUser?.userRole === "ADMIN" ||
              currentUser?.userRole === "SPECIES_ADMIN") && (
              <>
                {generateSidebarCollapse(
                  "Especies",
                  RiPlantFill,
                  "/dashboard/especie",
                  router
                )}
              </>
            )}
            {currentUser?.userRole === "NURSERY_ADMIN" && (
              <>
                <Sidebar.Collapse
                  label="Especies de vivero"
                  icon={PiPottedPlantBold}
                >
                  <Sidebar.Item
                    onClick={() => {
                      router.push("/dashboard/vivero-especies");
                    }}
                    href="/dashboard/vivero-especies"
                  >
                    Agregar especies en el vivero
                  </Sidebar.Item>
                  <Sidebar.Item
                    onClick={() => {
                      router.push(`/dashboard/vivero-especies/gestionar`);
                    }}
                    href={`/dashboard/vivero-especies/gestionar`}
                  >
                    Gestionar especies del vivero
                  </Sidebar.Item>
                </Sidebar.Collapse>
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
