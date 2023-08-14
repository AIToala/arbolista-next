"use client";
import { type ColumnDef } from "@tanstack/react-table";

export interface Specie {
  [x: string]: any;

  name: string;
  family: string;
  commonNames: string;
}

export const columns: Array<ColumnDef<Specie>> = [
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
];
