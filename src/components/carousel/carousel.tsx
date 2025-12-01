import { useState } from "react";
import { dishData } from "../../../data/dishes";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5", "Slide 6"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const visibleSlides = 3;

  const next = () => {
    if (current < dishData.length - visibleSlides) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${current * (100 / visibleSlides)}%)`,
        }}
      >
        {dishData.map((item, index) => {
          const centerIndex = current + 1;

          return (
            <div key={index} className="shrink-0 w-1/3 px-2">
              <div
                className={`bg-indigo-50 rounded-2xl flex justify-center items-center transition-all duration-500
                  ${index === centerIndex ? "h-80 scale-y-110" : "h-64 scale-y-100"}`}
              >
                <span className="text-2xl font-semibold text-indigo-600">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <button
        onClick={prev}
        className="left-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full disabled:opacity-50"
        disabled={current === 0}
      >
        ‹
      </button>
      <button
        onClick={next}
        className="right-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full disabled:opacity-50"
        disabled={current >= slides.length - visibleSlides}
      >
        ›
      </button>
    </div>
  );
}
