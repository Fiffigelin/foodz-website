import Paragraph from "../../components/text/paragraph";
import { footerContents } from "../../data/data";
import FooterContent from "./footer-content";

function Footer() {
  return (
    <section className="
    w-full flex flex-col justify-evenly items-center mx-auto c-space max-w-7xl mt-10 border-t border-gray-300"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex flex-col px-2 py-4 mt-10">
          <img src="/foodz.png" className="w-38 self-center mb-4"/>
          <Paragraph text="Explore your Taste with special food in the special place, that will make you happy. I try to write some thing without lorem isum." color="text-(--color-neutral)" className="text-center md:w-2/3 self-center" />
        </div>
        <div className="mb-10 mt-4 w-full flex flex-col gap-3">
          {footerContents.map((cont) => (
            <FooterContent id={cont.section} items={cont.contents} title={cont.section} />
          ))}
        </div>
      </div>

      {/* Tablet & Desktop */}
      <div className="sm:hidden md:flex w-full justify-evenly px-2 py-4 my-10 gap-10 lg:gap-22 xl:gap-35">
          <div className="flex flex-col w-1/2">
            <img src="/foodz.png" className="w-38 self-center mb-4"/>
            <Paragraph text="Explore your Taste with special food in the special place, that will make you happy. I try to write some thing without lorem isum." color="text-(--color-neutral)" className="text-center" />
          </div>
          <div className="flex w-full justify-between">
            {footerContents.map((cont) => (
              <div className="flex flex-col">
                <Paragraph text={cont.section} />
                <ul className="flex flex-col">
                  {cont.contents.map((c) => (
                    <li>
                      <a href={c.uri} className="text-lg text-(--color-neutral)">{c.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Footer;