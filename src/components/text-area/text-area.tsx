import { useState } from "react";

type TextAreaProps = {
  id: string;
  label?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
};

function TextArea({
  id,
  label,
  placeholder,
  value,
  onChange,
  rows = 4
}: TextAreaProps) {
  const [focused, setFocused] = useState(false);

  const updateText = (value:string) => {
    if(value.length > 250) return;
    
    onChange(value)
  }

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 text-lg">
          {label}
        </label>
      )}

      <div
        className={`rounded bg-white ring-1 p-2 ${
          focused ? "ring-green-500" : "ring-gray-300"
        }`}
      >
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => updateText(e.target.value)}
          className="w-full resize-none outline-none text-lg text-black placeholder:text-gray-400"
        ></textarea>
      </div>
    </div>
  );
}

export default TextArea;
