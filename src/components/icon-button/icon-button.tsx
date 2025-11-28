// import { useState } from "react";
import { IconType } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

import "./icon-button.scss";

interface Props {
	icon: "hamburger" | "close";
	onClick?: () => void;
	rounded?: boolean;
}

const IconButton = ({ icon, onClick }: Props) => {
	// const [showClose, setClose] = useState(false);

	const getIcon = (icon: string): IconType => {
		switch (icon) {
			case "hamburger":
				return RxHamburgerMenu;
			case "close":
				return VscChromeClose;
			default:
				return RxHamburgerMenu;
		}
	};
	const IconComponent = getIcon(icon);

	// const handleOnClick = () => {
	// 	if (onClick) {
	// 		onClick();
	// 		setClose(!showClose);
	// 	}
	// };

	return (
		<button className="icon-button" onClick={onClick}>
			<IconComponent size={24} color="black" enableBackground={"false"} />
		</button>
	);
};

export default IconButton;
