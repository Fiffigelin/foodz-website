import { Fragment, useState } from "react";
import { Dish } from "../../../data/dishes";
import DishCard from "../dish-card/dish-card";

import "./card-carousel.scss";
import { useIsMobile } from "./use-dimension";
import { useSwipeable } from "react-swipeable";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

interface Props {
	items: Dish[];
}

const DishCarousel = ({ items }: Props) => {
	const [slide, setSlide] = useState<number>(0);
	const isMobile = useIsMobile();

	const cardsToShow = isMobile ? 1 : 3;

	const nextSlide = () => {
		setSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
	};

	const handlers = useSwipeable({
		onSwipedLeft: nextSlide, // Dra åt vänster → Nästa kort
		onSwipedRight: prevSlide, // Dra åt höger → Föregående kort
		preventScrollOnSwipe: true, // Förhindra scroll på swipe
		trackMouse: true, // Stöd för swipe med mus också
	});

	const focusSlide = Math.floor(cardsToShow / 2);
	return (
		<Fragment>
			<div className="dish-scroll-wrapper" {...handlers}>
				<div className="dish-scroll-container">
					{items
						.slice(slide, slide + cardsToShow)
						.concat(items.slice(0, Math.max(slide + cardsToShow - items.length, 0)))
						.map((item, index) => (
							<DishCard key={index} focus={focusSlide === index} dish={item} />
						))}
				</div>
			</div>

			<div className="scroll-controls">
				<button
					className={`scroll-btn ${slide > 0 ? "active" : ""}`}
					onClick={prevSlide}
				>
					<FiArrowLeftCircle size={30} color="grey" />
				</button>

				<button
					className={`scroll-btn ${slide < items.length - 1 ? "active" : ""}`}
					onClick={nextSlide}
				>
					<FiArrowRightCircle size={30} color="grey" />
				</button>
			</div>
		</Fragment>
	);
};

export default DishCarousel;
