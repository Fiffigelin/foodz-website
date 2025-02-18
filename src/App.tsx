import { Fragment, ReactNode, useState } from "react";
import { useRef, useCallback } from "react";
import HeroSection from "./pages/sections/hero/hero-section";
import SpecialOffer from "./pages/sections/special-offer/special-offer";
import Navbar from "./components/navbar/navbar";

import "./App.scss";

const sections: ReactNode[] = [
	<HeroSection />,
	<SpecialOffer />,
	"Sektion 3",
	"Sektion 4",
	"Sektion 5",
];

function App() {
	const sectionRefs = useRef<HTMLDivElement[] | null[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const handleScroll = useCallback(
		(event: React.WheelEvent) => {
			// event.preventDefault();

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
		<Fragment>
			<Navbar />
			<div className="container" onWheel={handleScroll}>
				{sections.map((content, index) => (
					<div
						key={index}
						ref={(el) => (sectionRefs.current[index] = el!)}
						className="section"
					>
						{content}
					</div>
				))}
			</div>
		</Fragment>
	);
}

export default App;
