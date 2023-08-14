"use client";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export interface UserColumn {
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
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
