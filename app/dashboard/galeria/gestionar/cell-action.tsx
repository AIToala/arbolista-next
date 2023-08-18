/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";
import React from "react";
import { Switch } from "@/app/components/ui/switch";

import { type GallerySpecie } from "./columns";
import axios from "axios";
interface CellActionUsersProps {
  data: GallerySpecie;
}
export const CellActionGallery: React.FC<CellActionUsersProps> = ({ data }) => {
  const updateGallery = async (e: any) => {
    console.log(e.target.checked, data.id);
    await axios.put(`/api/gallery/`, {
      id: data.id,
      isInGallery: e.target.checked,
    });
  };

  return <Switch onChange={updateGallery} />;
};
