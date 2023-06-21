"use client";

import Logo from "../Logo";
const Footer = () => {
  return (
    <div
      className="
            bg-gray-900 
            p-12
            items-center 
            justify-center 
            gap-10 
            flex
            w-full 
            flex-col 
            text-white
        "
    >
      <div className="flex flex-row 2xs:flex-col w-fit gap-6 items-center justify-center">
        <div className="w-full h-fit flex flex-row items-start gap-4">
          <div className="bg-green-500 h-fit w-fit rounded-xl">
            <Logo src="/images/logo-w.svg" width={200} height={200} />
          </div>
          <div className="flex flex-row justify-center gap-5 w-full">
            <div className="flex flex-col gap-2 text-center w-full">
              <div className="font-bold text-green-400">Catalogo</div>
              <ul className="flex-col flex gap-2">
                <li className="hover:decoration-green-400 cursor-pointer hover:underline">
                  Galeria
                </li>
                <li className="hover:decoration-green-400 cursor-pointer hover:underline">
                  Especies
                </li>
                <li className="hover:decoration-green-400 cursor-pointer hover:underline">
                  Planta tu arbol
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-center w-full">
              <div className="font-bold text-green-400">Viveros</div>
              <ul className="flex-col flex gap-2">
                <li className="hover:decoration-green-400 cursor-pointer hover:underline">
                  Viveros
                </li>
                <li className="hover:decoration-green-400 cursor-pointer hover:underline">
                  Unete
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 text-center w-full">
              <div className="font-bold text-green-400">Nosotros</div>
              <ul className="flex-col flex gap-2">
                <li className="hover:decoration-green-400 cursor-pointer hover:underline">
                  Mision / Vision
                </li>
                <li className="hover:decoration-green-400 cursor-pointer hover:underline">
                  Contactenos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[80%] h-[2px] bg-gray-700" />
      <div className="text-center flex flex-col gap-5">
        <p>
          Con el apoyo de{" "}
          <a className="text-green-400 font-semibold" href="https://ciifen.org">
            CIIFEN
          </a>{" "}
          y en colaboracion con{" "}
          <a
            href="https://www.instagram.com/jardinbotanicogye/"
            className="text-green-400 font-semibold"
          >
            Jardin Botanico de Guayaquil
          </a>
        </p>
        <p>Copyright © 2023, Team Arbolista</p>
      </div>
    </div>
  );
};

export default Footer;
