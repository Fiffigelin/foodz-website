import { Dish } from "../../../data/dishes";
import { AiFillFire } from "react-icons/ai";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

import "./dish-card.scss";
import PrimaryButton from "../primary-button/primary-button";

interface Props {
	dish: Dish;
	focus?: boolean;
}

const DishCard = ({ dish, focus = false }: Props) => {
	console.log(focus);
	return (
		<article className={focus ? "dish-card" : "dish-card hidden"} key={dish.id}>
			<img className="dish-image" src={dish.image} alt={dish.title} />

			<header className="dish-header">
				<h1>{dish.title}</h1>
				<div className="heat-info">
					<AiFillFire size={20} color="#04b90b" />
					<p>02:21:11</p>
				</div>
			</header>

			<section className={focus ? "info-section" : "info-section hidden"}>
				<div className="reviews">
					<div className="stars">
						<FaStar size={16} color="#04b90b" />
						<FaStar size={16} color="#04b90b" />
						<FaStar size={16} color="#04b90b" />
						<FaStarHalfStroke size={16} color="#04b90b" />
						<FaRegStar size={16} color="#04b90b" />
					</div>
					<p>214 reviews</p>
				</div>

				<div className="flavor">
					<p>Excellent flavor for your preference with:</p>
					<ul>
						{dish.preferences.map((flavor, index) => (
							<li key={index}>{flavor}</li>
						))}
					</ul>
				</div>
			</section>

			<footer className="order">
				<p>${dish.cost}</p>
				<PrimaryButton />
			</footer>
		</article>
	);
};

export default DishCard;
