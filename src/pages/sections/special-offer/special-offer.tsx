import DishCarousel from "../../../components/card-carousel/card-carousel";
import { dishData } from "../../../../data/dishes";

import "./special-offer.scss";

const SpecialOffer = () => {
	return (
		<div className="special-offer-container">
			<h1>
				<span>Today</span>
				<span className="green-text">Special</span>
				<span>Offers</span>
			</h1>
			<p>
				Best cooks & best delivery guys all at your service. Hot tasty food will
				reach you now!
			</p>
			<DishCarousel items={dishData} />
		</div>
	);
};

export default SpecialOffer;
