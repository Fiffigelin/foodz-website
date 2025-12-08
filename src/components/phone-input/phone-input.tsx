import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { CountryCode } from "../../data/data";

type PhoneInputProps = {
  id: string;
  label?: string;
  items: CountryCode[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function PhoneInput({
  id,
  label,
  items,
  placeholder,
  value,
  onChange
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [isoCode, setisoCode] = useState<string>("");
  const [code, setCode] = useState<string>("+00");
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

  const toggleIsoCode = (iso: string) => {
    if (isoCode === iso) {
      setisoCode("");
      setCode("+00");
      setOpen(false);
      return;
    }

    const item = items.find(c => c.isoCode === iso);
    if (!item) return;

    setisoCode(item.isoCode);
    setCode(item.code);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      {label && <label htmlFor={id} className="block mb-1 text-lg">{label}</label>}

      <div className={`flex w-full items-center justify-between rounded bg-white ring-1 ${open || focused ? "ring-green-500" : "ring-gray-300"}`}>
        <button
          id={id}
          onClick={() => setOpen(prev => !prev)}
          className={`ring-1 rounded-l h-11 p-2 min-w-[65px] flex justify-between items-center ${open || focused ? "ring-green-500" : "ring-gray-300"}`}
        >
          <span className="min-w-4 text-left text-sm font-thin">{isoCode || ""}</span>
          {open 
              ? <RiArrowUpSLine size={20} /> 
              : <RiArrowDownSLine size={20} />}
        </button>

        <p className="p-2 text-gray-400 text-lg">
          {code}
        </p>

        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full outline-none p-2 pl-0 text-lg"
        />
      </div>

      {open && (
        <ul className="absolute z-20 mt-1 min-w-[65px] rounded bg-gray-50 ring-1 ring-gray-300 max-h-60 overflow-y-auto scroll-smooth">
          {items.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer select-none p-2 hover:bg-gray-200 text-lg ${isoCode === item.isoCode ? "bg-green-100" : ""}`}
              onClick={() => toggleIsoCode(item.isoCode)}
            >
              {item.isoCode}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default PhoneInput;
