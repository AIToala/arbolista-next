"use client";
import { Sidebar } from "flowbite-react";
import { RiPlantFill, RiHome2Fill } from "react-icons/ri";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import "app/globals.css";

interface SidebarProps {
  currentUser?: SafeUser | null;
}

const SidebarC: React.FC<SidebarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <aside>
      <Sidebar className="sidebar" color="!green" style={{ height: "210vh" }}>
        <Sidebar.Logo href="#" img="/images/logo.svg" imgAlt="logo">
          <p>Arborista</p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse label="Usuarios" icon={FaUserAlt}>
              <Sidebar.Item
                onClick={() => {
                  router.push("/dashboard/usuario");
                }}
                href="/dashboard/usuario"
              >
                Agregar Usuarios
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => {
                  router.push("/dashboard/gestionar");
                }}
                href="/dashboard/gestionar"
              >
                Gestionar Usuarios
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse label="Especies" icon={RiPlantFill}>
              <Sidebar.Item
                onClick={() => {
                  router.push("/dashboard/especie");
                }}
                href="/dashboard/especie"
              >
                Agregar Especies
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => {
                  router.push("/dashboard/gestionar");
                }}
                href="/dashboard/gestionar"
              >
                Gestionar Especies
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse label="Viveros" icon={GiPlantsAndAnimals}>
              <Sidebar.Item
                onClick={() => {
                  router.push("/dashboard/vivero");
                }}
                href="/dashboard/vivero"
              >
                Agregar Viveros
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => {
                  router.push("/dashboard/gestionar");
                }}
                href="/dashboard/gestionar"
              >
                Gestionar Viveros
              </Sidebar.Item>
            </Sidebar.Collapse>

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
