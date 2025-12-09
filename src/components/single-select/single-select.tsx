import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

export interface SingleSelectItem {
  id: string | number;
  name: string;
}

type SingleSelectProps = {
  id: string;
  label?: string;
  placeholder: string;
  items: SingleSelectItem[];
  value: SingleSelectItem;
  className?: string;
  onChange: (value: SingleSelectItem | null) => void;
};

function SingleSelect({
  id,
  label,
  placeholder,
  items,
  value,
  className = "",
  onChange
}: SingleSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const applyWidth = (className: string = "") => {
    const width = className.split(" ").find(c => c.startsWith("w-"));

    const cleaned = className
      .split(" ")
      .filter(c => !c.startsWith("w-"))
      .join(" ");

    return `${cleaned} ${width ?? "w-full"}`.trim();
  }

  const finalClass = applyWidth(className);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const select = (item: SingleSelectItem) => {
    if (value?.id === item.id) {
      onChange(null);
    } else {
      onChange(item);
    }
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className={`relative ${finalClass}`}>
      {label && <label htmlFor={id} className="block mb-1 text-lg">{label}</label>}

      <button
        id={id}
        onClick={() => setOpen(prev => !prev)}
        className={`flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300 ${open ? "ring-green-500" : ""}`}
      >
        <span className={`${value.name.length > 0 ? "text-black" : "text-gray-400"} text-lg`}>
          {value.name == "" ? placeholder : value.name}
        </span>
        {open ? <RiArrowUpSLine className="text-xl" /> : <RiArrowDownSLine className="text-xl" />}
      </button>

      {open && (
        <ul className="absolute z-20 mt-1 w-full rounded bg-gray-50 ring-1 ring-gray-300 max-h-60 overflow-y-auto">
          {items.map((item) => {
            const isSelected = value?.id === item.id;
            return (
              <li
                key={item.id}
                className={`cursor-pointer select-none p-2 text-lg hover:bg-gray-200 ${isSelected ? "bg-green-100" : ""}`}
                onClick={() => select(item)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SingleSelect;

