/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
interface TabEspeciesProps {
  data: any[];
}

const TabEspecies: React.FC<TabEspeciesProps> = ({ data }) => {
  const router = useRouter();
  return (
    <Tabs defaultValue="multimedia" className="w-full">
      <TabsList>
        <TabsTrigger value="multimedia" className="flex gap-2">
          Multimedia <LayoutGrid className="w-5 h-5 ml-2" />
        </TabsTrigger>
        <TabsTrigger value="lista" className="flex gap-2">
          Lista <List className="w-5 h-5 ml-2" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="multimedia">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
          {data.map((result) => (
            <Link key={result.id} href={`/especies/${result.name}`}>
              <div className="col-span-1 cursor-pointer group bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="flex flex-col gap-2 w-full">
                  <div
                    className="
                      w-full
                      aspect-square
                      relative
                      overflow-hidden
                      rounded-xl
                    "
                  >
                    <Image
                      fill
                      sizes="100%"
                      className="object-cover h-full w-full group-hover:scale-110 transition"
                      alt={"especie"}
                      src={
                        result.images.presentation_url === "No determinado"
                          ? "images/logo.svg"
                          : result.images.presentation_url ?? "images/logo.svg"
                      }
                    />
                  </div>
                </div>
                <div className="bg-white p-2">
                  <div className="font-semibold text-xs md:text-sm lg:text-md">
                    {result.name}
                  </div>
                  <div className="font-light text-xs md:text-sm lg:text-md text-neutral-500 truncate">
                    <p>{result.taxonomy?.common_names}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="lista">
        <Table className="w-full text-sm text-left text-gray-500">
          <TableHeader className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <TableRow>
              <TableHead scope="col" className="px-6 py-3">
                <span className="sr-only">Especie</span>
              </TableHead>
              <TableHead scope="col" className="px-6 py-3">
                Nombre
              </TableHead>
              <TableHead scope="col" className="px-6 py-3">
                Familia
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((result) => {
              return (
                <TableRow key={result.id} className="bg-white hover:bg-gray-50">
                  <TableCell className="p-4">
                    <div
                      onClick={() => {
                        router.push(`/especies/${result.name}`);
                      }}
                      className="cursor-pointer !m-0"
                    >
                      <Image
                        src={
                          result.images.presentation_url === "No determinado"
                            ? "images/logo.svg"
                            : result.images.presentation_url ??
                              "images/logo.svg"
                        }
                        alt={result.name}
                        width={100}
                        height={100}
                        className="rounded-sm aspect-square overflow-hidden hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 transition"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 font-semibold px-6 py-4">
                    <div
                      onClick={() => {
                        router.push(`/especies/${result.name}`);
                      }}
                      className="cursor-pointer"
                    >
                      {result.name}
                    </div>
                    <div className="font-light text-gray-700">
                      <p>{result.taxonomy?.common_names}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700 px-6 py-4">
                    {result.taxonomy?.family?.family}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
};
export default TabEspecies;
