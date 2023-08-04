"use client";
import ClientOnly from "@/app/components/ClientOnly";
import HeroContainer from "./HeroContainer";
import Button from "../components/buttons/Button";
import DownloadButton from "../components/buttons/DownloadButton";
import { useRouter } from "next/navigation";

const Home = async () => {
  const router = useRouter();
  return (
    <ClientOnly>
      <HeroContainer />
      <div className="w-full flex flex-col items-center">
        <div className="text-4xl font-bold text-gray-800 mt-10">
          ¿Que es Arbolista?
        </div>
      </div>
      <div className=" pt-5 pb-10 px-20 items-center justify-center flex flex-col">
        <div className="flex flex-col col-span-1 justify-center mb-15 mt-25 bg-green-500 p-2 rounded-md ">
          <p className="font-light text-neutral-00 mt-2 !text-white px-10 pb-10">
            Arbolista es una iniciativa que busca promover la conservación de la
            biodiversidad local, destacando la importancia de las especies
            autóctonas y proporcionando información relevante para su cultivo y
            protección.
            <br />
            En los últimos años, la pérdida de hábitats naturales y el impacto
            humano han provocado el declive significativo de numerosas especies
            en todo el mundo. Guayaquil, ciudad rica en biodiversidad, no ha
            estado exenta de esta preocupante realidad. Para contrarrestar esta
            tendencia y crear conciencia sobre la importancia de conservar
            nuestras especies nativas, nace Arbolista, una página web
            interactiva y educativa de divulgación de información sobre especies
            nativas y en peligro de extinción.
          </p>
          <div className="btn-sm flex justify-center">
            <Button
              label="Conoce más"
              onClick={() => {
                router.push("/acerca");
              }}
              style="bg-white !text-black !py-2 !px-2 !w-[20%]"
            />
            <DownloadButton
              label="Aprende a sembrar"
              fileUrl={"/pdf/GUIA DE SIEMBRA.pdf"}
              style="bg-white !text-black !py-2 !px-2 !w-[20%]"
            />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Home;
