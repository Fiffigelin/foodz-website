import Carousel from "../../components/carousel/carousel";
import Paragraph from "../../components/text/paragraph";
import TextHeader from "../../components/text/text-header";

function SpecialOffer() {

  return (
    <section className="
    min-h-screen w-full flex flex-col justify-evenly
    h-full mt-20 items-center content-end"
    >
      <div className="flex flex-col md:w-[60%]">
        <div className="flex w-3/5 self-center justify-evenly">
          <TextHeader text={"Todays"} />
          <TextHeader text={"special"} color={"text-(--color-green)"} />
          <TextHeader text={"Offer"} />
        </div>

        <Paragraph text={"Best cooks & best delivery guys all at your service. Hot tasty food will reach you now!"} 
          color={"text-(--text-neutral)"}
          className={"text-center"}
        />
      </div>
      <Carousel />
    </section>
  );
}

export default SpecialOffer;
