'use client';

import { SafeUser } from "@/app/types";
import Link from "next/link";

interface UserNavigationItemsProps {
    currentUser?: SafeUser | null | undefined;
}

const UserNavigationItems: React.FC<UserNavigationItemsProps> = ({
    currentUser,
}) => {
    return (
        <ul className="py-2" aria-labelledby="user-menu-button">
            {currentUser?.userRole === "ADMIN" ? (
                <>
                    <li>
                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</Link>
                    </li>
                </>
            ) : currentUser?.userRole === "SPECIES_ADMIN" ? (
                <>
                    <li>
                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</Link>
                    </li>
                </>
            ) : currentUser?.userRole === "NURSERY_ADMIN" ? (
                <>
                    <li>
                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Bienvenido, espere autorización</Link>
                    </li>
                </>
            )}
        </ul>
    );
}

export default UserNavigationItems;