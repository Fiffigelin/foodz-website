import MealCard from "../../components/meal-card/meal-card";
import TextHeader from "../../components/text/text-header";
import useDevice from "../../hooks/use-device";

function Delicious() {
  const { isMobile } = useDevice();
  return (
    <section className="
    min-h-screen w-full flex flex-col justify-evenly
    h-full mt-20 items-center">
      <div className="flex flex-col w-full md:w-[60%]">
        <TextHeader text={"How We Keep Your"} className={"text-center"}/>

        <div className="flex gap-3 justify-center md:gap-4">
          <TextHeader text={"Meal"} className={"my-3 lg:my-6 2xl:my-8"} />
          <TextHeader text={"Delicious"} color={"text-(--color-green)"} className={"my-3 lg:my-6 2xl:my-8"} />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-evenly xl:gap-8 2xl:gap-10">
        <MealCard title={"Prepair Your Meal"} text={"That help us know what delicious meal you will try, but I don't write anything"} icon={"Arrow"} white={isMobile && true} />
        <MealCard title={"Prepair Your Meal"} text={"That help us know what delicious meal you will try, but I don't write anything"} icon={"Meal"} white={true}/>
        <MealCard title={"Prepair Your Meal"} text={"That help us know what delicious meal you will try, but I don't write anything"} icon={"Truck"} white={isMobile && true} />
      </div>
    </section>
  );
}

export default Delicious;