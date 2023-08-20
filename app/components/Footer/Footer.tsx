"use client";
import Link from "next/link";
import Logo from "../Logo";
const Footer = () => {
  return (
    <div
      className="
            bg-gray-900 
            p-8
            items-center 
            justify-center 
            gap-6
            grid
            w-full 
            grid-cols-2 
            text-white
            text-sm
            md:text-md
        "
    >
      <div className="flex flex-row col-span-2 w-full md:col-span-1 justify-center h-full">
        <div className="h-full rounded-xl">
          <Logo
            src="/images/logos/fngye-logo-about.png"
            className="hover:ring hover:ring-green-300 rounded-lg w-full h-full object-cover transition"
            alt="Flora Nativa GYE"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center gap w-full col-span-2 md:col-span-1">
        <div className="flex flex-col gap-2 text-center w-full">
          <div className="font-bold text-md md:text-lg">Catálogo</div>
          <ul className="flex-col flex gap-2">
            <li className="hover:text-green-400 cursor-pointer">
              <Link href="/galeria">Galería</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link href="/especies">Especies</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-center w-full">
          <div className="font-bold text-md md:text-lg">Viveros</div>
          <ul className="flex-col flex gap-2">
            <li className="hover:text-green-300 cursor-pointer">
              <Link href="/viveros">Viveros</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-center w-full">
          <div className="font-bold text-md md:text-lg">Nosotros</div>
          <ul className="flex-col flex gap-2">
            <li className="hover:text-green-300 cursor-pointer">
              <Link href="/acerca">Nuestra misión</Link>
            </li>
            <li className="hover:text-green-300 cursor-pointer">
              <Link href="/acerca#contacto">Contáctenos</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-gray-700 col-span-2" />
      <div className="text-center flex flex-col gap-5 col-span-2">
        <p>
          Con el apoyo de{" "}
          <a
            className="text-green-400 font-semibold hover:text-green-300"
            href="https://ciifen.org"
          >
            CIIFEN
          </a>{" "}
          y en colaboración con{" "}
          <a
            href="https://www.instagram.com/jardinbotanicogye/"
            className="text-green-400 font-semibold hover:text-green-300"
          >
            Jardín Botánico de Guayaquil
          </a>
        </p>
        <p>Copyright © 2023, Flora Nativa GYE</p>
      </div>
    </div>
  );
};

export default Footer;
