import { User, Species } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "email"
> & {
    createdAt: string;
    updatedAt: string;
    email: string | null;
};

export type SafeSpecies = Omit<
    Species,
    "createdAt" | "updatedAt"
> & {
    taxonomy: true,
    images: {
        presentation_url: true,
        fruit_url: true,
        leaf_url: true,
        flower_url: true,
        detailFlower_url: true,
        bark_url: true,
        seed_url: true,
    } [],
    arboriculture: true,
    ecology: true,
    ethnobotany: true,
    flower: true,
    leaf: true,
    root: true,
    seeds: true,
    stalk: true,

};