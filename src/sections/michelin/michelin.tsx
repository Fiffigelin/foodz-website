import { FaArrowRightLong } from "react-icons/fa6";
import Paragraph from "../../components/text/paragraph";
import TextHeader from "../../components/text/text-header";

function Michelin() {
  return (
    <section className="
    min-h-screen w-full flex flex-col justify-evenly
    h-full mt-20 items-center">
      <div className="flex w-full md:w-[60%] justify-evenly">
        <TextHeader text={"19"} />
        <TextHeader text={"Michelin"} color={"text-(--color-green)"} />
        <TextHeader text={"Stars Chef"} />
      </div>

      <div className="flex justify-between h-full">
        <img src="49401946_9233345.png" alt="A michelin cook" className="hidden md:flex md:w-1/2 lg:w-1/2 px-6"/>
        <div className="flex flex-col w-full h-full text-justify md:w-1/2 px-2 lg:w-1/2 lg:px-6">
          <div className="flex justify-start mt-8 md:justify-between text-(--color-green) font-semibold md:my-3">
            <h2 className="text-xl md:text-base xl:text-xl">Alain Ducasse - 19 Michelin Stars</h2>
            <p className="hidden md:flex self-center cursor-pointer text-xs xl:text-sm">View All Restaurant <FaArrowRightLong className="self-center ml-2" /></p>
          </div>
          <Paragraph text={"Considered by many to be one of the best chefs in the world, he’s built a business empire over the years with 36 restaurants spanning across the globe. He’s also one of only two chefs to hold 21 Michelin stars throughout his career and the first chef to own restaurants carrying three Michelin Stars in three cities."} />
          <Paragraph text={"In addition to being known for world-class French cuisine, Ducasse is the only chef on this list who has sent his food into space. In 2015, Ducasse sent meals to astronauts orbiting Earth aboard the International Space Station, an accomplishment that Ducasse said he viewed as conquering ‘ the final frontier (of cooking)’"} />
          <p className="flex text-(--color-green) text-lg font-semibold my-3 cursor-pointer md:hidden">View All Restaurant <FaArrowRightLong className="self-center ml-2" /></p>
        </div>
      </div>
    </section>
  );
}

export default Michelin;