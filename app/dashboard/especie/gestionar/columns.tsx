"use client";
import { type ColumnDef } from "@tanstack/react-table";
import { CellActionEspecies } from "./cell-action";

export interface SpecieColumns {
  [x: string]: any;

  name: string;
  family: string;
  commonNames: string;
}

export const columns: Array<ColumnDef<SpecieColumns>> = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "family",
    header: "Familia",
  },
  {
    accessorKey: "commonNames",
    header: "Nombres comunes",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActionEspecies data={row.original} />,
  },
];
