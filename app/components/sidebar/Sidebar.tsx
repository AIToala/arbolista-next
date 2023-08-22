/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import type { TokenizedUser } from "@/app/types";
import {
  GalleryHorizontal,
  Home,
  LogOut,
  Sprout,
  Trees,
  User,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FC } from "react";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

interface SidebarProps {
  currentUser?: TokenizedUser | null;
}

const Sidebar: FC<SidebarProps> = ({ currentUser }) => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Cierre de sesión exitoso");
      router.push("/home");
    } catch (error) {
      toast.error("Ocurrió un error al cerrar sesión");
    }
  };

  return (
    <div
      className="
        w-fit h-auto relative bg-transparent min-w-[35vw] md:min-w-[20vw]  bg-white z-10 items-centerborder-emerald-500 border-r flex flex-col p-2"
    >
      <aside className={"w-full"}>
        <div className="flex flex-row justify-center items-center my-8">
          <div className="flex-grow flex flex-col justify-center items-center text-center p-2">
            <h1 className="text-lg font-bold">{currentUser?.name}</h1>
            <p className="text-sm text-gray-500 break-all">
              {currentUser?.email}
            </p>
          </div>
        </div>
        <hr className="bg-slate-700 mb-4" />
        <Button
          className="w-full text-sm flex flex-row flex-1 px-2 items-center justify-between focus:outline-none focus:ring-2 focus:ring-gray-200 mb-10"
          onClick={() => {
            router.push("/home");
          }}
        >
          <div className="gap-2 flex flex-row items-center justify-center">
            <Home size={24} />
            Inicio
          </div>
          <div className="w-4"></div>
        </Button>
        {currentUser?.userRole === "ADMIN" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium"
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <User size={24} />
                  <h1 className="font-bold sm:text-sm">Usuarios</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                    href="/dashboard/usuario"
                  >
                    Agregar usuario
                  </Link>
                  <Link
                    href="/dashboard/usuario/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar usuarios
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium "
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Sprout size={24} />
                  <h1 className="font-bold sm:text-sm">Viveros</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                    href="/dashboard/vivero"
                  >
                    Agregar vivero
                  </Link>
                  <Link
                    href="/dashboard/vivero/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar viveros
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium "
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Trees size={24} />
                  <h1 className="font-bold sm:text-sm">Especies</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                    href="/dashboard/especie"
                  >
                    Agregar especie
                  </Link>
                  <Link
                    href="/dashboard/especie/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar especies
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium "
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <User size={24} />
                  <h1 className="font-bold sm:text-sm">Especies de vivero</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                    href="/dashboard/vivero-especies"
                  >
                    Agregar especie de vivero
                  </Link>
                  <Link
                    href="/dashboard/vivero-especies/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar especies de vivero
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium "
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <GalleryHorizontal size={24} />
                  <h1 className="font-bold sm:text-sm">Galeria</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    href="/dashboard/galeria/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar galerias
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {currentUser?.userRole === "SPECIES_ADMIN" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium"
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <User size={24} />
                  <h1 className="font-bold sm:text-sm">Especies</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                    href="/dashboard/especie"
                  >
                    Agregar especie
                  </Link>
                  <Link
                    href="/dashboard/especie/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar especies
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {currentUser?.userRole === "NURSERY_ADMIN" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium"
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Sprout size={24} />
                  <h1 className="font-bold sm:text-sm">Viveros</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                    href="/dashboard/vivero"
                  >
                    Agregar mi vivero
                  </Link>
                  <Link
                    href="/dashboard/vivero/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar mi vivero
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="flex flex-col justify-center text-gray-700 p-2 rounded-md font-medium"
            >
              <AccordionTrigger className="hover:!no-underline">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <User size={24} />
                  <h1 className="font-bold sm:text-sm">Especies de vivero</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col text-center">
                  <Link
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                    href="/dashboard/vivero-especies"
                  >
                    Agregar especie a mi vivero
                  </Link>
                  <Link
                    href="/dashboard/vivero-especies/gestionar"
                    className="w-full p-2 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline rounded-lg"
                  >
                    Gestionar especies de mi vivero
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        <div className="flex flex-col justify-center items-center mt-10">
          <Button
            className="w-full flex flex-row flex-1 px-2 items-center justify-between focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={handleSignOut}
          >
            <div className="gap-2 text-xs flex flex-row items-center justify-center">
              <LogOut size={24} />
              Cerrar sesión
            </div>
            <div className="w-4"></div>
          </Button>
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
