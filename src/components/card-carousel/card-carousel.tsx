import { useRef, useState } from "react";
import { Dish } from "../../../data/dishes";
import DishCard from "../dish-card/dish-card";

import "./card-carousel.scss";

interface Props {
	items: Dish[];
}

const DishCarousel = ({ items }: Props) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrollIndex, setScrollIndex] = useState(0);

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;

		const container = scrollRef.current;
		const cards = Array.from(container.children) as HTMLElement[];
		const cardWidth = cards[0]?.offsetWidth || 0;

		setScrollIndex((prev) => {
			const newIndex =
				direction === "left"
					? Math.max(prev - 1, 0)
					: Math.min(prev + 1, items.length - 1);
			const targetScroll = newIndex * cardWidth;

			container.scrollTo({ left: targetScroll, behavior: "smooth" });
			return newIndex;
		});
	};

	return (
		<div className="dish-scroll-wrapper">
			<div className="dish-scroll-container" ref={scrollRef}>
				{items.map((item, index) => (
					<DishCard key={index} dish={item} id={index} />
				))}
			</div>

			<div>
				<button
					className={`scroll-btn ${scrollIndex > 0 ? "active" : ""}`}
					onClick={() => scroll("left")}
					disabled={scrollIndex === 0}
				>
					{"<"}
				</button>

				<button
					className={`scroll-btn ${scrollIndex < items.length - 1 ? "active" : ""}`}
					onClick={() => scroll("right")}
					disabled={scrollIndex === items.length - 1}
				>
					{">"}
				</button>
			</div>
		</div>
	);
};

export default DishCarousel;
