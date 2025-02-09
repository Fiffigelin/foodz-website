import { useState } from "react";
import OrderNowButton from "../order-now-button/order-now-btn";
import IconButton from "../icon-button/icon-button";

import "./navbar.scss";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const hamburgerMenu = () => {
		return (
			<div className="hamburger-container">
				<IconButton
					icon={isMenuOpen ? "close" : "hamburger"}
					onClick={() => setMenuOpen(!isMenuOpen)}
				/>
			</div>
		);
	};

	return (
		<nav className="nav-container">
			<div className="nav-left">
				<div className="nav-logo">
					<img
						src="/foodz.png"
						alt="logo"
						style={{ objectFit: "cover", width: "100%", alignItems: "center" }}
					/>
				</div>
				{hamburgerMenu()}
			</div>
			<div className="nav-right">
				<div className="nav-link">Home</div>
				<div className="nav-link">Menu</div>
				<div className="nav-link">Blog</div>
				<div className="nav-link">Contact</div>
				<OrderNowButton />
			</div>
			<div className="nav-links-container">
				{isMenuOpen && (
					<ul className="nav-links">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
