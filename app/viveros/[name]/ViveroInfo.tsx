/* eslint-disable @typescript-eslint/restrict-plus-operands */
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface ViveroInfoProps {
  data: any[];
}

const ViveroInfo: React.FC<ViveroInfoProps> = ({ data }) => {
  return (
    <div className="w-full relative justify-center items-center mx-auto flex flex-col">
      <div className="w-full grid grid-cols-2 justify-center p-4">
        <div className="w-fit bg-gray-200 rounded-lg col-span-1 shadow-lg">
          <Image
            src={
              data[0].logoSrc === "No determinado"
                ? "images/logo.svg"
                : data[0].logoSrc
            }
            alt="Logo"
            width={400}
            height={400}
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className="col-span-1 w-full justify-center p-8 my-auto flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">{data[0].name}</h1>
          <h2 className="text-gray-700 font-light text-xl mb-5 flex flex-row gap-2 items-center">
            <MapPin className="w-5 h-5 mr-2" color="green" />
            {data[0]?.address}
          </h2>
          <div className="flex flex-col w-full">
            <h1 className="text-lg flex flex-row gap-2 items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href={"mailto:" + data[0].email}>{data[0].email}</a>
            </h1>
            <h1 className="text-lg flex flex-row gap-2 items-center">
              <Phone className="w-5 h-5 mr-2" />
              {data[0].phone.split(",").join(" / ")}
            </h1>
            <Link
              href={
                data[0].website === "No determinado" ? "#" : data[0].website
              }
            >
              <h1 className="text-lg flex flex-row gap-2 items-center">
                <Globe2 className="w-5 h-5 mr-2" />
                {data[0].website === "No determinado"
                  ? "Muy pronto"
                  : data[0].website}
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col gap-2">
        <h1 className="font-bold text-xl">Especies disponibles</h1>
        {data[0].speciesAvailable !== null ? (
          <Table className="w-full border shadow-lg rounded-lg">
            <TableHeader className="bg-green-700 uppercase">
              <TableRow>
                <TableHead className="text-white font-semibold">
                  Especie
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Tamaño
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Cantidad
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data[0].speciesAvailable.map((result: any, index: any) => {
                return (
                  <TableRow key={index} className="">
                    <TableCell>
                      <h1 className="font-bold">{result.species.name}</h1>
                    </TableCell>
                    <TableCell>
                      <p>{result.speciesHeight}</p>
                    </TableCell>
                    <TableCell>
                      <p>{result.speciesAmount}</p>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          <h1 className="font-bold text-lg">\+.+/</h1>
        )}
      </div>
    </div>
  );
};
export default ViveroInfo;
