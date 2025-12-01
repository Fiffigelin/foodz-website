import useDevice from "../../hooks/use-device";
import HeroMobile from "../../components/hero/hero-mobile";
import HeroDesktop from "../../components/hero/hero-desktop";

function Hero() {
  const {isMobile} = useDevice();

  return (
    <section className="relative w-screen min-h-screen overflow-hidden mx-auto">
      {isMobile ? (
        <HeroMobile />
      ) : (
        <HeroDesktop />
      )}
    </section>
  );
}

export default Hero;