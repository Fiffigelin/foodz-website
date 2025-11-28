import { motion, useScroll, useSpring, useTransform } from "motion/react";
import OrderNowButton from "../../components/order-now-button/order-now-btn";

function Hero() {
  const {scrollYProgress} = useScroll()
  const y = useSpring(scrollYProgress, {damping: 40});

  const mountain = useTransform(y, [0, 0.15], ["-25%%", "50%"]);

  return (
    <section className="relative w-screen min-h-screen mt-20 md:mt-30 overflow-hidden">
      <div className="flex flex-col justify-between mx-auto max-w-7xl min-h-screen
        md:flex-row">

        {/* Top Content */}
        <div className="flex flex-col items-center justify-between py-4 px-10
          md:items-start md:justify-baseline">
          <div className="text-center">
            <h1 className="font-(family-name:--font-header) text-4xl mb-2">You're hungry.</h1>
            <h2 className="font-(family-name:--font-header) text-4xl mb-2">You've Got Taste.</h2>
            <p className="text-center mx-10">Explore your Taste with special food in the special place.</p>
          </div>

        </div>

          <div className="flex items-center justify-center">
            <OrderNowButton />
            <a className="hidden" href="#menu">Explore Menu</a>
          </div>

        {/* Bottom Content */}
        <div className="relative flex h-110 justify-center items-center">
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

      </div>
    </section>
  );
}

export default Hero;