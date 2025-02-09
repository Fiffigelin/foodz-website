import { Fragment } from "react/jsx-runtime";
import "./hero-section.scss";
import OrderNowButton from "../../../components/order-now-button/order-now-btn";

const HeroSection = () => {
	return (
		<Fragment>
			<section className="hero">
				<div className="hero-left">
					<div className="hero-text">
						<h1>You've Got Questions.</h1>
						<h1>You've Got Taste.</h1>
						<p>
							Explore your Taste with special food in the special place. This text
							don't have any meaning
						</p>
					</div>
					<div className="order-menu">
						<OrderNowButton />
						<a href="#menu">Explore Menu</a>
					</div>
					<div className="left-container-bottom">
						<div className="stats-container">
							<div className="stats-left">
								<h4>9+</h4>
								<p>years of service.</p>
							</div>
							<div className="space-divider" />
							<div className="stats-right">
								<h4>120+</h4>
								<p>Stores in the world.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="hero-right">
					<img className="main-img" src="\hero-ramen.png" alt="Food Bowl" />
					<div className="green-background"></div>
				</div>
			</section>
		</Fragment>
	);
};
export default HeroSection;
