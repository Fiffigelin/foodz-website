import { useState } from 'react'
import { useRef, useCallback } from 'react';
import './App.scss'

const sections = ["Sektion 1", "Sektion 2", "Sektion 3", "Sektion 4", "Sektion 5"];

function App() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = useCallback((event: React.WheelEvent) => {
    event.preventDefault();

    /*<<< Adjust sensitivity and threshold for scrolling */
    const sensitivityUp = 0.05;
    const sensitivityDown = 0.04;
    const sensitivity = event.deltaY > 0 ? sensitivityDown : sensitivityUp;
    const threshold = 1;
    let newIndex = currentIndex;

    const adjustedDeltaY = Math.abs(event.deltaY) * sensitivity;

    if (adjustedDeltaY > threshold) {
      if (event.deltaY > 0) {
        newIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }
    }

    sectionRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth" });
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  return (
      <div className="container" onWheel={handleScroll}>
          {sections.map((text, index) => (
              <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el!)}
                  className="section"
              >
                  {text}
              </div>
          ))}
      </div>
  );
}

export default App


