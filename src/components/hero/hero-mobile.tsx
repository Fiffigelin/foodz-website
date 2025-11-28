import { motion, useScroll, useSpring, useTransform } from "motion/react";
import OrderNowButton from "../order-now-button/order-now-btn";
import useDevice from "../../hooks/use-device";

function HeroMobile() {
  const {scrollYProgress} = useScroll()
  const {orientation} = useDevice();
  
  const y = useSpring(scrollYProgress, {damping: 40});
  const mountain = useTransform(y, [0, 0.15], ["-25%%", "30%"]);
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {orientation == "portrait" ? (
<>
        <div className="flex flex-col flex-1 items-center justify-evenly px-10">
        <div className="text-center">
          <h1 className="font-(family-name:--font-header) text-4xl mb-2">You're hungry.</h1>
          <h2 className="font-(family-name:--font-header) text-4xl mb-2">You've Got Taste.</h2>
          <p className="text-center mx-10">Explore your Taste with special food in the special place.</p>
        </div>
        <div className="flex items-center justify-center">
          <OrderNowButton />
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
          y: mountain
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
          </>
      ) : (
        <>  
          <div className="flex flex-col flex-1 items-center justify-evenly px-10">
            <div className="text-center">
              <h1 className="font-(family-name:--font-header) text-4xl mb-2">You're hungry.</h1>
              <h2 className="font-(family-name:--font-header) text-4xl mb-2">You've Got Taste.</h2>
              <p className="text-center mx-10">Explore your Taste with special food in the special place.</p>
            </div>
            <div className="flex items-center justify-center">
              <OrderNowButton />
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
              y: mountain
            }}
            />
            <img className="hidden size-46" src="\hero-ramen.png" alt="Food Bowl" />
            <div
              className="
              absolute left-0 bottom-0
              bg-(--color-light_green)
              w-full h-60
              md:w-[40vw] md:h-[300px]
              lg:w-[300px] lg:h-[500px]
              rounded-[50%_50%_0_0]
              -z-10
              md:hidden"
              />
          </div>
        </>
        )}
    </div>
  );
}

export default HeroMobile;