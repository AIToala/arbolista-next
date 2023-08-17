/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";
import Image from "next/image";
import Link from "next/link";

interface ViverosProps {
  data: any[];
}

const ViverosViews: React.FC<ViverosProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
      {data.map((result: any) => (
        <Link key={result.id} href={`/viveros/${result.name}`}>
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
                    result.logoSrc === "No determinado"
                      ? "/images/logos/fngye-logo-item.png"
                      : result.logoSrc
                  }
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h1 className="font-bold text-lg">{result.name}</h1>
                <h2 className="text-gray-700 font-light text-lg">
                  {result.address}
                </h2>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ViverosViews;
