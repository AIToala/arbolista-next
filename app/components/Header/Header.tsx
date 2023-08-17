/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import useSiembraModal from "@/app/hooks/useSiembraModal";
import { type TokenizedUser } from "@/app/types";
import { LogOut, Menu, Sprout } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, type FC } from "react";
import toast from "react-hot-toast";
import Logo from "../Logo";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Navigation from "./Navigation";
import UserNavigationItems from "./UserNavigationItems";

interface HeaderProps {
  currentUser?: TokenizedUser | null;
}

const Header: FC<HeaderProps> = ({ currentUser }) => {
  const siembraModal = useSiembraModal();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Cierre de sesión exitoso");
      window.location.href = "/home";
    } catch (error) {
      toast.error("Ocurrió un error al cerrar sesión");
    }
  };

  return (
    <nav className="bg-white border-gray-200 shadow-md relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Logo src="/images/logo-text.svg" className="mr-3" alt="Arbolista" />
        </div>
        <div className="flex items-center">
          <div className="items-center justify-between hidden w-full md:flex ">
            <Navigation />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button
            type="button"
            className="bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium"
            onClick={siembraModal.onOpen}
          >
            <Sprout className="w-5 h-5 md:mr-2" />
            <span className="hidden md:flex">Sembremos</span>
          </Button>
          {currentUser != null ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="hover:ring-2 hover:ring-green-300 border-2">
                  <AvatarFallback className="cursor-pointer">
                    {currentUser.name
                      ?.split(" ")
                      .map((initial) => initial[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex-col flex gap-2">
                  <h1 className="capitalize font-bold text-gray-900">
                    {currentUser.name}
                  </h1>
                  <h2 className="text-gray-600">{currentUser.email}</h2>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserNavigationItems currentUser={currentUser} />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div
                    className="flex flex-row items-center"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              className="bg-cyan-700 hover:bg-cyan-700/90 focus:ring-4 focus:outline-none focus:ring-cyan-300"
              onClick={() => {
                router.push("/login");
              }}
            >
              Accede
            </Button>
          )}
          <Button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 block"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <hr className="md:hidden flex w-full bg-green-700" />
      <div
        className={
          (isMenuOpen ? "flex " : "hidden ") +
          "flex flex-col w-full md:hidden transition my-2 px-2"
        }
      >
        <Navigation isMobile orientation="vertical" />
      </div>
    </nav>
  );
};

export default Header;
