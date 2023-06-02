'use client';

import Logo from "../Logo"
import { SafeUser } from "@/app/types";
import { GiSeedling } from "react-icons/gi";
import Navigation from "./Navigation";
import Image from "next/image";
import UserNavigationItems from "./UserNavigationItems";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface HeaderProps {
    currentUser?: SafeUser | null;
}

const Header: React.FC<HeaderProps> = ({
    currentUser,
}) => {
    
    const router = useRouter();
    return (
        <nav className="bg-white border-gray-200 shadow-md relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <Logo src="/images/logo-text.svg" className="mr-3" alt="Arbolista" />
                </div>
                <div className="flex items-center md:order-2">
                    
                    <div className="md:mr-2">
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                            <GiSeedling className="w-5 h-5 md:mr-2 md:-ml-1"/>
                            <span className="hidden md:flex">Sembremos</span>
                        </button>
                    </div>
                    {currentUser ? (
                        <>
                            <button type="button" className="flex mr-2 text-sm bg-gray-400 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <Image className="rounded-full" src="/images/placeholder.jpg" width={32} height={32} alt="user photo" />
                            </button>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900">{currentUser.name}</span>
                                    <span className="block text-sm  text-gray-500 truncate">{currentUser.email}</span>
                                </div>
                                <UserNavigationItems currentUser={currentUser} />
                                <div className="">
                                    <button onClick={()=>signOut()} className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Cerrar sesión</button>
                                </div>
                            </div>
                        </>
                    ):(
                        <div className="hidden md:flex md:flex-row">
                            <button className="px-5 py-2.5 hover:opacity-90 bg-cyan-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm text-center inline-flex items-center mr-2" onClick={()=>{router.push('/login')}}>Accede</button>
                            <button className="px-5 py-2.5 hover:opacity-90 bg-sky-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm text-center inline-flex items-center" onClick={()=>{router.push('/register')}}>Únete</button>
                        </div>
                    )}
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:text-center">
                        <Navigation />
                        <hr className="border-gray-300 mt-2.5 md:mt-0 w-full md:hidden"/>
                        <li className="mt-3 md:mt-0 md:hidden">
                            <button className="px-5 py-2.5 hover:opacity-90 bg-cyan-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm text-center items-center mr-2" onClick={()=>{router.push('/login')}}>Accede</button>
                        </li>
                        <li className="mt-3 md:mt-0 md:hidden">
                                <button className="px-5 py-2.5 hover:opacity-90 bg-sky-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm text-center items-center" onClick={()=>{router.push('/register')}}>Únete</button>
                        </li>    
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
