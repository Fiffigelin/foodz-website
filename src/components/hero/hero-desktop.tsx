import { motion, useScroll, useSpring, useTransform } from "motion/react";
import PrimaryButton from "../primary-button/primary-button";
import Paragraph from "../text/paragraph";
import TextHeader from "../text/text-header";

function HeroDesktop() {
  const {scrollYProgress} = useScroll()
  
  const y = useSpring(scrollYProgress, {damping: 40});
  const bowl = useTransform(y, [0, 0.2], ["10%%", "30%"]);
  
  return (
    <div className="flex flex-row mx-auto min-h-screen max-w-7xl c-space">

			<div className="flex flex-col w-4/5 justify-evenly">
				<div className="flex flex-col max-w-[90%] justify-evenly">
          <TextHeader text={"You've Got Questions."} className="mb-3 lg:mb-6 2xl:mb-8" />
          <TextHeader text={"You've Got Taste."} className="mb-3 lg:mb-6 2xl:mb-8" />
          <Paragraph text={"Explore your Taste with special food in the special place."} color={"text-(--color-neutral)"} />
				</div>

        <div className="flex flex-col w-[80%] lg:w-[70%] justify-evenly gap-16">
				  <div className="flex flex-row w-[85%] py-4 rounded-xl justify-evenly bg-gray-100 lg:w-[80%] xl:w-[85%] 2xl:w-[85%]">
				  	<div className="text-center text-lg font-thin text-gray-500">
				  		<p className="text-2xl xl:text-3xl">9+</p>
				  		<p className="text-base xl:text-xl">years of service.</p>
				  	</div>
				  	<div className="self-center mx-4 w-0.5 h-[90%] bg-gray-200" />
				  	<div className="text-center text-lg font-thin text-gray-500">
				  		<p className="text-2xl xl:text-3xl">120+</p>
				  		<p className="text-base xl:text-xl">Stores in the world.</p>
				  	</div>
          </div>

				  <div className="flex flex-row gap-8">
				  	<PrimaryButton />
				  	<a href="#menu" className="self-center text-lg font-thin text-(--color-green)">Explore Menu</a>
				  </div>
				</div>

			</div>

			<div className="absolute inset-y-0 right-0 flex items-center w-1/2 justify-center">
        <motion.div
        className="
        inset-0 z-200
        size-90
        lg:size-100
        xl:size-120"
        style={{
          backgroundImage:"var(--hero-img)", 
          backgroundPosition: "bottom", 
          backgroundSize: "cover",
          y: bowl
        }}
        />

        <div
        className="
          absolute bottom-0 right-0
          bg-(--color-light_green)
          h-1/2
          w-full
          rounded-tl-full
          -z-10
          xl:h-[60%]
        "
        />
			</div>
    </div>
  );
}

export default HeroDesktop;