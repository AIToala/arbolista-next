import ClientOnly from "@/app/components/ClientOnly";
import HeroContainer from "./HeroContainer";

const Home = async () => {
  return (
    <ClientOnly>
      <HeroContainer />
      <div className="w-full flex flex-col items-center">
        <div className="text-4xl font-bold text-gray-800 mt-10">
          ¿Que es Arbolista?
        </div>
      </div>
    </ClientOnly>
  );
};

export default Home;
