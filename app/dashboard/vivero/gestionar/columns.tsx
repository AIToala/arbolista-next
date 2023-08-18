"use client";
import { type ColumnDef } from "@tanstack/react-table";
import { CellActionViveros } from "./cell-action";

export interface NurseryColumn {
  id?: string;
  name?: string;
  email?: string;
  createdAt: any;
  updatedAt: any;
}

export const columns: Array<ColumnDef<NurseryColumn>> = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Correo Electrónico",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActionViveros data={row.original} />,
  },
];
