"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface NavigationProps {
  orientation?: "horizontal" | "vertical";
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  orientation = "horizontal",
  isMobile = false,
}) => {
  const router = useRouter();
  const links = [
    {
      name: "Acerca",
      href: "/acerca",
    },
    {
      name: "Galería",
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
        <div
          key={index}
          className={`
                        text-sm
                        text-gray-600
                        hover:text-gray-800
                        transition
                        cursor-pointer
                        capitalize
                        ${orientation === "vertical" ? "my-1" : "mt-0"}
                        ${
                          isMobile
                            ? "hover:bg-gray-200 hover:rounded-md"
                            : "hover:border-b-green-600 hover:border-b-[2px] hover:font-semibold"
                        }
                    `}
        >
          <div
            onClick={() => {
              router.push(link.href);
            }}
            className="w-full py-2 pl-3 pr-4 text-gray-900 rounded"
          >
            {link.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navigation;
