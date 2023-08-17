/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import { Switch } from "@/app/components/ui/switch";

import { type GallerySpecie } from "./columns";
interface CellActionUsersProps {
  data: GallerySpecie;
}
export const CellActionGallery: React.FC<CellActionUsersProps> = ({ data }) => {
  return <Switch />;
};
