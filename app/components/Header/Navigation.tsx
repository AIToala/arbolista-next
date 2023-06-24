"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface NavigationProps {
  orientation?: "horizontal" | "vertical";
}

const Navigation: React.FC<NavigationProps> = ({
  orientation = "horizontal",
}) => {
  const router = useRouter();
  const links = [
    {
      name: "Acerca",
      href: "/acerca",
    },
    {
      name: "Galeria",
      href: "/galeria",
    },
    {
      name: "Especies",
      href: "/especies",
    },
    {
      name: "Viveros",
      href: "/viveros",
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <li
          key={index}
          className={`
                        text-sm
                        text-gray-600
                        hover:text-gray-800
                        hover:font-bold
                        hover:border-b-[2px]
                        hover:border-b-green-600
                        transition
                        cursor-pointer
                        ${orientation === "vertical" ? "mt-4" : "mt-0"}
                    `}
        >
          <div
            onClick={() => {
              router.push(link.href);
            }}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0"
          >
            {link.name}
          </div>
        </li>
      ))}
    </>
  );
};

export default Navigation;
