import { useRef, useState, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import MultiPill from "./multi-pill";

export interface SingleSelectItem {
  id: string | number;
  name: string;
}

type MultiSelectProps = {
  id: string;
  placeholder: string;
  items: SingleSelectItem[];
  value: SingleSelectItem[];
  onChange: (selected: SingleSelectItem[]) => void;
};

function MultiSelect({ id, placeholder, items, value, onChange }: MultiSelectProps) {
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

  const toggleItem = (item: SingleSelectItem) => {
    const exists = value.find(v => v.id === item.id);
    if (exists) {
      onChange(value.filter(v => v.id !== item.id));
    } else {
      onChange([...value, item]);
    }
  };

  const removeItem = (item: SingleSelectItem) => {
    onChange(value.filter(v => v.id !== item.id));
  };

  return (
    <div ref={wrapperRef} id={id} className="relative w-full">
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300 ${open ? "ring-green-500" : ""}`}
      >
        <span className={`${value.length > 0 ? "text-black" : "text-gray-400"} text-lg`}>
          {value.length > 0 ? `${value.length} selected` : placeholder}
        </span>
        {open ? <RiArrowUpSLine className="text-xl" /> : <RiArrowDownSLine className="text-xl" />}
      </button>

      {open && (
        <ul className="absolute z-20 mt-1 w-full rounded bg-gray-50 ring-1 ring-gray-300 max-h-60 overflow-y-auto">
          {items.map(item => {
            const selected = value.find(v => v.id === item.id);
            return (
              <li
                key={item.id}
                className={`cursor-pointer select-none text-lg p-2 hover:bg-gray-200 ${selected ? "bg-green-100" : ""}`}
                onClick={() => toggleItem(item)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}

      {value.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {value.map(item => (
            <MultiPill item={item} onDelete={removeItem} icon={"Food"}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
