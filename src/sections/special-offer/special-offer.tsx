import Carousel from "../../components/carousel/carousel";

function SpecialOffer() {

  return (
    <section className="
    min-h-screen w-full flex flex-col
    h-full mt-40 justify-items-center content-end">

      <h1
        className="
          text-center 
          font-(family-name:--font-header)
          text-[clamp(32px,5vw,48px)]
          mb-0
        "
      >
        <span className="mr-3">Today</span>
        <span className="mr-3 text-(--color-green)">Special</span>
        <span>Offers</span>
      </h1>

      <p
        className="
          text-center 
          text-(--text-neutral)
          text-[clamp(18px,1.8vw+0.5rem,24px)]
          mb-0
        "
      >
        Best cooks & best delivery guys all at your service. Hot tasty food will
        reach you now!
      </p>

        <Carousel />
    </section>
  );
}

export default SpecialOffer;
