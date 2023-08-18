/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";
import Image from "next/image";
import Link from "next/link";
interface GalleryEspecieProps {
  data: any[];
  type?: string;
}

const GalleryEspecie: React.FC<GalleryEspecieProps> = ({
  data,
  type = "all",
}) => {
  return (
    <div className="w-full p-4 grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 relative">
      {data.map((result, index) => (
        <Link href={`/especies/${result.name}`} key={index}>
          <div className="col-span-1 cursor-pointer group bg-white rounded-md overflow-hidden shadow-lg hover:ring-2 hover:ring-green-300">
            <div className="flex flex-col gap-2 w-full">
              <div
                className="
                  w-full
                  flex
                  h-[600px]
                  overflow-hidden
                  aspect-video
                  relative
                  items-end
              "
              >
                <div className="w-full p-2 z-10 relative items-center flex flex-row text-xs md:text-md bg-black/30 justify-between text-white">
                  <p>{result.name}</p>
                  <div
                    className={
                      (result?.ecology?.conservation_status === "EX"
                        ? "ex "
                        : result?.ecology?.conservation_status === "EW"
                        ? "ew "
                        : result?.ecology?.conservation_status === "CR"
                        ? "cr "
                        : result?.ecology?.conservation_status === "EN"
                        ? "en "
                        : result?.ecology?.conservation_status === "VU"
                        ? "vu "
                        : result?.ecology?.conservation_status === "NT"
                        ? "nt "
                        : result?.ecology?.conservation_status === "LC"
                        ? "lc "
                        : result?.ecology?.conservation_status === "DD"
                        ? "dd "
                        : result?.ecology?.conservation_status === "NE"
                        ? "ne "
                        : "") + "rounded-full w-fit h-fit p-2"
                    }
                  >
                    <p className="font-semibold">
                      {result?.ecology?.conservation_status}
                    </p>
                  </div>
                </div>
                <Image
                  fill
                  className="object-cover h-full w-full group-hover:scale-110 transition"
                  alt={"especie"}
                  src={
                    result?.images?.presentation_url === "No determinado"
                      ? "/images/logos/fngye-logo-item.png"
                      : result?.images?.presentation_url
                  }
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default GalleryEspecie;
