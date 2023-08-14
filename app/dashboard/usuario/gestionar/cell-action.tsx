"use client";

import { Edit, Trash, MoreHorizontal } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { type UserColumn } from "./columns";
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <span className="sr-only">Abrir Menu</span>
          <MoreHorizontal className="h-4 v-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="mr-2 h-4 w-4" />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
