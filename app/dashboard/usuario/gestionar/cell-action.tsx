/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import axios from "axios";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { type UserColumn } from "./columns";
interface CellActionUsersProps {
  data: UserColumn;
}
export const CellActionUsers: React.FC<CellActionUsersProps> = ({ data }) => {
  const router = useRouter();
  const id = data.id;
  const handleEdit = () => {
    router.push(`/dashboard/usuario/gestionar/editar/${id}`);
  };
  const handleDelete = () => {
    axios
      .delete(`/api/users/`, { data })
      .then((response) => {
        toast.success("Usuario eliminado correctamente");
        router.push("/dashboard/usuario/gestionar");
      })
      .catch((error) => {
        toast.error("Error al eliminar el usuario");
        console.error("Error al eliminar el usuario:", error);
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white hover:bg-white/90">
          <span className="sr-only">Abrir Menu</span>
          <MoreHorizontal
            className="h-4 v-4 bg-white hover:bg-white"
            color="black"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>
          <Trash className="mr-2 h-4 w-4" />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
