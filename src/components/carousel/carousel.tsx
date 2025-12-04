import { useEffect, useRef, useState } from "react";
import { dishData } from "../../data/dishes";
import Card from "./card";
import useDevice from "../../hooks/use-device";

export default function InfiniteCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragOffset = useRef(0);
  const { isMobile } = useDevice();
  const [current, setCurrent] = useState(0);
  const total = dishData.length;
  const visibleSlides = isMobile ? 1: 3;
  
  const loopedData = [
    ...dishData.slice(-visibleSlides),
    ...dishData,
    ...dishData.slice(0, visibleSlides),
  ];
  const centerIndex = (current + 1 + visibleSlides) % loopedData.length;

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    dragOffset.current = e.touches[0].clientX - dragStartX.current;
  };

  const onTouchEnd = () => {
    if (dragStartX.current === null) return;

    const threshold = 50;
    if (dragOffset.current > threshold) {
      prevSlide();
    } else if (dragOffset.current < -threshold) {
      nextSlide();
    }

    dragStartX.current = null;
    dragOffset.current = 0;
  };

  useEffect(() => {
    if (isMobile) return;
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      if (current >= total) {
        const realIndex = current % total;
        track.style.transition = "none";
        setCurrent(realIndex);
        track.style.transform = `translateX(-${
          (realIndex + visibleSlides) * (100 / visibleSlides)
        }%)`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.6s ease-out";
          });
        });
      }

      if (current < 0) {
        const realIndex = total + current;
        track.style.transition = "none";
        setCurrent(realIndex);
        track.style.transform = `translateX(-${
          (realIndex + visibleSlides) * (100 / visibleSlides)
        }%)`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.6s ease-out";
          });
        });
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [current, total, visibleSlides, isMobile]);

  return (
    <div className="overflow-hidden w-full h-full">
      <div className="relative w-full h-full py-4 md:py-12">
        <div
          ref={trackRef}
          className="flex transition-transform duration-600 ease-out md:transition-none md:overflow-visible overflow-x-auto scroll-snap-x snap-mandatory"
          onTouchStart={isMobile ? onTouchStart : undefined}
          onTouchMove={isMobile ? onTouchMove : undefined}
          onTouchEnd={isMobile ? onTouchEnd : undefined}
          style={
            !isMobile
              ? {
                  transform: `translateX(-${
                    (current + visibleSlides) * (100 / visibleSlides)
                  }%)`,
                }
              : {}
          }
        >
          {loopedData.map((item, index) => {
            const isCenter = isMobile ? index === current + visibleSlides : index === centerIndex;
            return <Card key={`${item.id}-${index}`} item={item} focus={isMobile ? false : isCenter} visibleSlides={visibleSlides} isMobile={isMobile}/>;
          })}
        </div>
      </div>

      <div className={`${isMobile && "hidden"} flex justify-center gap-13 py-2`}>
        <button
          onClick={prevSlide}
          className="bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full disabled:opacity-50"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full disabled:opacity-50"
        >
          ›
        </button>
      </div>
    </div>
  );
}
