export interface Dish {
	id: number;
	title: string;
	image: string;
	description: string;
	cost: number;
	preferences: string[];
	flavor: string[];
}

export const dishData: Dish[] = [
	{
		id: 0,
		title: "Jajangmyeon",
		image: "/jajangmyeon.png",
		description:
			"A savory, rich black bean paste sauce served with pork or beef and vegetables over noodles. It has a slight sweetness, making it a comfort food favorite.",
		cost: 21.99,
		preferences: ["Rich", "savory", "slightly sweet"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 1,
		title: "Kimbap",
		image: "/kimbap.png",
		description:
			"Cooked meat, vegetables, and egg are wrapped in seaweed to make this refreshing and savory roll, perfect for a quick snack or lunch.",
		cost: 21.99,
		preferences: ["Fresh", "savory", "with subtle sweetness"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 2,
		title: "Kimchi",
		image: "/kimchi.png",
		description:
			"A fermented mix of cabbage and radishes seasoned with garlic, chili, and ginger, offering a tangy, spicy, and pungent kick.",
		cost: 21.99,
		preferences: ["Spicy", "sour", "pungent"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 3,
		title: "Kimchi-Jijigae",
		image: "/kimchi-jijigae.png",
		description:
			"A comforting stew made with kimchi, tofu, and pork or beef, packed with umami and perfect for chilly weather.",
		cost: 21.99,
		preferences: ["Spicy", "hearty", "umami"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 4,
		title: "Naengmyeon",
		image: "/naengmyeon.png",
		description:
			"Cold noodles served in a chilled broth with a boiled egg, cucumber, and sometimes meat, making for a refreshing meal.",
		cost: 21.99,
		preferences: ["Refreshing", "savory", "slightly tangy"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 5,
		title: "Samgyeopsal",
		image: "/samgyeopsal.png",
		description:
			"Grilled pork belly slices served with garlic, vegetables, and dipping sauces, often wrapped in lettuce with rice.",
		cost: 21.99,
		preferences: ["Smoky", "savory", "rich"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 6,
		title: "Tokpokki",
		image: "/tokpokki.png",
		description:
			"Rice cakes in a spicy, sweet chili sauce, creating a chewy and flavorful dish popular in street food markets.",
		cost: 21.99,
		preferences: ["Spicy", "sweet", "chewy"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 7,
		title: "Yangnyeom-chicken",
		image: "/yangnyeom-chicken.png",
		description:
			"Crispy fried chicken covered in a sweet and spicy sauce made from honey, sugar, soy sauce, garlic, and chili.",
		cost: 21.99,
		preferences: ["Sweet", "spicy", "crispy"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 8,
		title: "Bibimbap",
		image: "/bibimbap.png",
		description:
			"A mixed rice bowl topped with vegetables, kimchi, a fried egg, and choice of meat, all stirred together with gochujang for a spicy, savory dish.",
		cost: 21.99,
		preferences: ["Savory", "spicy", "fresh"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
	{
		id: 9,
		title: "Bulgogi",
		image: "/bulgogi.png",
		description:
			"Marinated beef grilled or stir-fried to tender perfection, offering a sweet, savory, and smoky flavor that pairs well with rice and vegetables.",
		cost: 21.99,
		preferences: ["Sweet", "savory", "smoky"],
		flavor: [
			"Sugar",
			"Gochujang",
			"Rice win vinegar",
			"Strawberry jam",
			"Soy sauce",
			"Garlic",
			"Ginger",
			"Butter",
		],
	},
];
