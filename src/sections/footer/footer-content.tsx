import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { Content } from "../../data/data";
import { motion } from "motion/react";

type SingleSelectProps = {
  id: string;
  title: string;
  items: Content[];
  className?: string;
};

function FooterContent({
  id,
  title,
  items,
  className
}: SingleSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <button
        id={id}
        onClick={() => setOpen(prev => !prev)}
        className={`flex w-full items-center justify-between p-2`}
      >
        <span className="text-lg font-semibold">{title}</span>
        {open ? <RiArrowDownSLine className="text-xl" /> : <RiArrowRightSLine className="text-xl" />}
      </button>

      {open && (
        <motion.div
          className="block overflow-hidden text-center"
          initial={{ opacity:0, x:-10 }}
          animate={{ opacity:1, x:0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration:1} }
        >
          <div className="pb-5">
            <ul className="flex flex-col items-center gap-3 relative z-20">
              {items.map((item, index) => (
                <li key={index}
                className="text-(--navtext-primary py-2 px-5"
                >
                  <a
                  className="text-lg text-(--color-neutral) hover:text-(--navtext-hover) transition-colors"
                  href={item.uri}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default FooterContent;

