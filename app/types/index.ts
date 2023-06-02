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
    "createdAt" | "taxonomy" | "images"
> & {
    createdAt?: string;
    taxonomy: {
        family: string;
        common_names: string;
    };
    images: {
        presentation_url: string;
    };
};