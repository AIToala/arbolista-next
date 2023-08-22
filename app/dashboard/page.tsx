"use client";

import Image from "next/image";

const DashboardIndexPage = () => {
  return (
    <div className="w-full flex justify-center items-center p-10 mx-auto my-10">
      <div className="grid grid-cols-2 items-center justify-center gap-2">
        <div className="col-span-1 p-4 flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-bold text-gray-800 bg-transparent shadow-sm">
            Bienvenido a tu dashboard 🌿🌍
          </h1>
          <hr className="h-2 bg-gray w-full" />
          <p className="text-gray-600">
            Te invitamos a explorar nuestro Dashboard de Administración de
            Especies de Plantas y de Viveros. Únete a nosotros en esta
            emocionante jornada hacia un futuro más verde y saludable. Tu
            contribución como Biólogo o como Viverista es vital para alcanzar
            nuestros objetivos de conservación y sostenibilidad.
          </p>
        </div>
        <Image
          className="col-span-1 object-cover w-full"
          src="/images/dashboard2.svg"
          alt="Bienvenido a tu dashboard"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default DashboardIndexPage;
