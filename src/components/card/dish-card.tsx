import { Dish, dishData } from "../../../data/dishes";
import { AiFillFire } from "react-icons/ai";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

import "./dish-card.scss";

const DishCard = () => {
	const dish: Dish = dishData[0];

	return (
		<article className="dish-card">
			<img className="dish-image" src={dish.image} alt={dish.title} />

			<header className="dish-header">
				<h1>{dish.title}</h1>
				<div className="heat-info">
					<AiFillFire size={20} color="#04b90b" />
					<p>02:21:11</p>
				</div>
			</header>

			<section className="reviews">
				<div className="stars">
					<FaStar size={16} color="#04b90b" />
					<FaStar size={16} color="#04b90b" />
					<FaStar size={16} color="#04b90b" />
					<FaStarHalfStroke size={16} color="#04b90b" />
					<FaRegStar size={16} color="#04b90b" />
				</div>
				<p>214 reviews</p>
			</section>

			<section className="flavor">
				<p>Excellent flavor for your preference with:</p>
				<ul>
					{dish.preferences.map((flavor, index) => (
						<li key={index}>{flavor}</li>
					))}
				</ul>
			</section>

			<footer className="order">
				<p>${dish.cost}</p>
				<button>Order now</button>
			</footer>
		</article>
	);
};

export default DishCard;
