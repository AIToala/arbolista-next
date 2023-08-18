/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";
import { Switch } from "@/app/components/ui/switch";
import React from "react";

import axios from "axios";
import { type GallerySpecie } from "./columns";
interface CellActionUsersProps {
  data: GallerySpecie;
}
export const CellActionGallery: React.FC<CellActionUsersProps> = ({ data }) => {
  const updateGallery = async () => {
    await axios.put(`/api/gallery`, {
      id: data.id,
      isInGallery: !data.isInGallery,
    });
  };
  return (
    <Switch defaultChecked={data.isInGallery} onCheckedChange={updateGallery} />
  );
};
