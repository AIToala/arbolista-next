import getSession from "./getSession";
import prisma from "@/app/libs/prismadb";

export default async function getCurrentUser(){
    try{
        const session = await getSession();
        if(!session?.user?.email) return null;
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            },
        });
        if(!currentUser) return null;
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
        };
        
    }catch (error: any){
        return null;
    }

}