import { useState } from "react";

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  value:string;
  onChange: (value: string) => void;
}

function TextInput({ id, label, placeholder, value, onChange }: InputProps) {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="relative w-full">
      <p className="block mb-1 text-lg">{label}</p>
      <div
        className={`flex w-full items-center justify-between rounded bg-white p-2 ring-1 ${
          focused ? "ring-green-500" : "ring-gray-300"
        }`}
      >
        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full outline-none text-lg"
        />
      </div>
    </div>
  );
}

export default TextInput;