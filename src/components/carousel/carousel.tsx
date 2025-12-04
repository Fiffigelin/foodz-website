import { useEffect, useRef, useState } from "react";
import { dishData } from "../../data/dishes";
import Card from "./card";

type CarouselProps = {
  visibleSlides?: number;
};

export default function InfiniteCarousel({
  visibleSlides = 3,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<number>(0);
  const total = dishData.length;

  // Skapa clones
  const loopedData = [
    ...dishData.slice(-visibleSlides),
    ...dishData,
    ...dishData.slice(0, visibleSlides),
  ];

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      // Clone → original höger
      if (current >= total) {
        const realIndex = current % total;
        track.style.transition = "none";
        setCurrent(realIndex);
        track.style.transform = `translateX(-${
          (realIndex + visibleSlides) * (100 / visibleSlides)
        }%)`;

        // Dubbel RAF för mjuk återställning
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.6s ease-out";
          });
        });
      }

      // Clone → original vänster
      if (current < 0) {
        const realIndex = total + current;
        track.style.transition = "none";
        setCurrent(realIndex);
        track.style.transform = `translateX(-${
          (realIndex + visibleSlides) * (100 / visibleSlides)
        }%)`;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.7s ease-out";
          });
        });
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      track.removeEventListener("transitionend", handleTransitionEnd);
  }, [current, total, visibleSlides]);

  // Mitt-index för scaling
  const centerIndex = (current + 1 + visibleSlides) % loopedData.length;

  return (
    <div>
      <div className="relative w-full h-full overflow-hidden py-12">
        {/* Slides wrapper */}
        <div
          ref={trackRef}
          className="flex transition-transform duration-600 ease-out"
          style={{
            transform: `translateX(-${
              (current + visibleSlides) * (100 / visibleSlides)
            }%)`,
          }}
        >
          {loopedData.map((item, index) => {
            const isCenter = index === centerIndex;

            return (
              <Card key={`${item.id}-${index}`} item={item} focus={isCenter}/>
            );
          })}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-13 py-2">
        <button
          onClick={prevSlide}
          className="
            bg-white shadow-md 
            w-10 h-10
            flex items-center justify-center
            rounded-full 
            disabled:opacity-50
          "
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="
            bg-white shadow-md
            w-10 h-10
            flex items-center justify-center
            rounded-full
            disabled:opacity-50
          "
        >
          ›
        </button>
      </div>
    </div>
  );
}
