"use client";
import ClientOnly from "@/app/components/ClientOnly";
import { useRouter } from "next/navigation";
import Button from "../components/buttons/Button";
import DownloadButton from "../components/buttons/DownloadButton";
import HeroContainer from "./HeroContainer";

const Home = () => {
  const router = useRouter();
  return (
    <ClientOnly>
      <HeroContainer />
      <div className="w-full flex flex-wrap flex-col items-center">
        <div className="text-2xl md:text-4xl  font-bold text-gray-800 mt-10">
          ¿Que es Flora Nativa Guayaquil?
        </div>
      </div>
      <div className=" p-5 items-center justify-center flex flex-col">
        <div className="flex flex-col justify-center bg-green-500 p-2 rounded-md ">
          <p className="font-light !text-white p-4">
            Flora Nativa Guayaquil es una iniciativa que busca promover la
            conservación de la biodiversidad local, destacando la importancia de
            las especies autóctonas y proporcionando información relevante para
            su cultivo y protección.
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
          <div className="grid grid-cols-2 p-4 justify-center">
            <Button
              label="Conoce más"
              onClick={() => {
                router.push("/acerca");
              }}
              style="bg-white !text-black p-2"
            />
            <DownloadButton
              label="Aprende a sembrar"
              fileUrl={"/pdf/GUIA DE SIEMBRA.pdf"}
              style="bg-white !text-black p-2"
            />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Home;
