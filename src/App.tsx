import { useState } from 'react'
import { useRef, useCallback } from 'react';
import HeroSection from './pages/sections/hero/hero-section';
import './App.scss'
import OrderNowButton from './components/order-now-button/order-now-btn';

const sections = ["Sektion 1", "Sektion 2", "Sektion 3", "Sektion 4", "Sektion 5"];

function App() {
  const sectionRefs = useRef<HTMLDivElement[] | null[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScroll = useCallback(
    (event: React.WheelEvent) => {
      event.preventDefault();

      const sensitivityUp = 0.05;
      const sensitivityDown = 0.04;
      const sensitivity = event.deltaY > 0 ? sensitivityDown : sensitivityUp;
      const threshold = 1;

      const adjustedDeltaY = Math.abs(event.deltaY) * sensitivity;
      let newIndex = currentIndex;

      if (adjustedDeltaY > threshold) {
        if (event.deltaY > 0) {
          newIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
          newIndex = Math.max(currentIndex - 1, 0);
        }

        setCurrentIndex(newIndex);
        sectionRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [currentIndex]
  );

  return (
      <div className="container" onWheel={handleScroll}>
        <nav className="nav-container">
          <div className="nav-left">
            <div className="nav-logo">
              <img src="../../public/foodz.png" alt="logo" style={{objectFit: "cover", width: "100%", alignItems: "center"}}/>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-link">Home</div>
            <div className="nav-link">Menu</div>
            <div className="nav-link">Blog</div>
            <div className="nav-link">Contact</div>
            <OrderNowButton />
          </div>
        </nav>

          {sections.map((text, index) => (
            <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el!)}
            className="section"
            >
                  {index === 0 ? <HeroSection /> : <div>{text}</div>}
              </div>
          ))}
      </div>
  );
}

export default App


