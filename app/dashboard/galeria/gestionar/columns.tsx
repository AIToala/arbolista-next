"use client";
import { type ColumnDef } from "@tanstack/react-table";

export interface Specie {
  [x: string]: any;

  name: string;
  family: string;
  isInGallery: boolean;
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
    accessorKey: "isInGallery",
    header: "Esta en galeria",
  },
];
