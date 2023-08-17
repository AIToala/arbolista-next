"use client";
import { type ColumnDef } from "@tanstack/react-table";
import { CellActionUsers } from "./cell-action";

export interface UserColumn {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const columns: Array<ColumnDef<UserColumn>> = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Correo Electrónico",
  },
  {
    accessorKey: "role",
    header: "Rol de Usuario",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActionUsers data={row.original} />,
  },
];
