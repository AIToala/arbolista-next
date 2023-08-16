/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import { Edit, Trash, MoreHorizontal } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { type UserColumn } from "./columns";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/app/components/ui/dropdown-menu";
interface CellActionProps {
  data: UserColumn;
}
export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/dashboard/usuario/gestionar/editar/${data.id}`);
  };
  const handleDelete = () => {
    axios
      .delete(`/api/users/`, { data })
      .then((response) => {
        console.log("Usuario eliminado exitosamente");
        router.refresh();
      })
      .catch((error) => {
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
