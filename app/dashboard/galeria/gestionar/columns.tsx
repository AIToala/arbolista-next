"use client";
import { type ColumnDef } from "@tanstack/react-table";
import { CellActionGallery } from "./cell-action";
export interface GallerySpecie {
  [x: string]: any;
  name: string;
  family: string;
  isInGallery: boolean;
  conservationStatus: string;
}

export const columns: Array<ColumnDef<GallerySpecie>> = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "family",
    header: "Familia",
  },
  {
    accessorKey: "conservationStatus",
    header: "Estado de conservación",
  },
  {
    id: "actions",
    header: "¿Está en galería?",
    cell: ({ row }) => <CellActionGallery data={row.original} />,
  },
];
