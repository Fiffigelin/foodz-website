import { FaArrowRightLong } from "react-icons/fa6";
import "./michelin.scss";

const Michelin = () => {
	return (
		<section className="michelin">
			<h1>
				<span>19</span>
				<span className="green-text">Michelin</span>
				<span>Stars Chef</span>
			</h1>
			<div className="michelin-container">
				<div className="michelin-left">
					<img src="49401946_9233345.png" alt="A michelin cook" />
				</div>
				<div className="michelin-right">
					<p className="name">{"Kai Sterling - 19 Michelin Stars"}</p>
					<div className="link-container">
						<a>{"View all restaurants"}</a>
						<FaArrowRightLong size={20} color="#04b90b" className="icon-arrow" />
					</div>
					<div className="text-info">
						<p>
							{
								"Widely regarded as one of the greatest chefs of all time, Kai Sterling has built a culinary empire with 36 restaurants spanning the globe. As a trailblazer in the fine dining world, Kai is one of only two chefs to have earned 19 Michelin stars throughout their career and the first to own three Michelin-starred restaurants in three different cities."
							}
						</p>

						<p>
							{
								"Renowned for their world-class fusion of French and modernist cuisine, Kai has always pushed the boundaries of gastronomy. Their innovative approach isn’t limited to Earth—Kai made history as the first chef to send their creations into the deepest sea. In 2051, divers aboard the International Sea Station dined on dishes crafted by Kai, an achievement they described as 'conquering the final frontier of cooking'."
							}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Michelin;
