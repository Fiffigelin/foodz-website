import { motion, useScroll, useSpring, useTransform } from "motion/react";
import PrimaryButton from "../primary-button/primary-button";
import TextHeader from "../text/text-header";
import Paragraph from "../text/paragraph";

function HeroMobile() {
  const {scrollYProgress} = useScroll()
  
  const y = useSpring(scrollYProgress, {damping: 40});
  const bowl = useTransform(y, [0, 0.15], ["-25%%", "30%"]);
  
  return (
    <div className="flex flex-col justify-between min-h-screen mt-10">
      <div className="flex flex-col flex-1 items-center justify-evenly px-10">
        <div className="text-center">
          <TextHeader text={"You've Got Questions."} className="mb-3" />
          <TextHeader text={"You've Got Taste."} className="mb-3" />
          <Paragraph text={"Explore your Taste with special food in the special place."} color={"text-(--color-neutral)"} />
        </div>

        <div className="flex items-center justify-center">
          <PrimaryButton />
          <a className="hidden" href="#menu">Explore Menu</a>
        </div>        
      </div>

      <div className="relative flex flex-2 h-110 justify-center items-center">
        <motion.div
        className="inset-0 z-200 size-50"
        style={{
          backgroundImage:"var(--hero-img)", 
          backgroundPosition: "bottom", 
          backgroundSize: "cover",
          y: bowl
        }}
        />
        <div
          className="
          absolute left-1/2 bottom-0 -translate-x-1/2
          bg-(--color-light_green)
          w-full h-3/5
          scale-x-150
          rounded-t-full
          -z-10
          "
          />
      </div>
    </div>
  );
}

export default HeroMobile;