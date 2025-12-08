export interface Meal {
	id: number;
	title: string;
	image: string;
	description: string;
	cost: number;
	preferences: string[];
	flavor: string[];
}

export interface CountryCode {
	id: number;
	code: string;
	country: string;
	isoCode: string;
}

export const mealData: Meal[] = [
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

export const countryCodes: CountryCode[] = [
  { id: 1, code: "+46", country: "Sweden", isoCode: "SE" },
  { id: 2, code: "+47", country: "Norway", isoCode: "NO" },
  { id: 3, code: "+45", country: "Denmark", isoCode: "DK" },
  { id: 4, code: "+358", country: "Finland", isoCode: "FI" },
  { id: 5, code: "+44", country: "United Kingdom", isoCode: "GB" },
  { id: 6, code: "+49", country: "Germany", isoCode: "DE" },
  { id: 7, code: "+354", country: "Iceland", isoCode: "IS" },
  { id: 8, code: "+33", country: "France", isoCode: "FR" },
  { id: 9, code: "+34", country: "Spain", isoCode: "ES" },
  { id: 10, code: "+39", country: "Italy", isoCode: "IT" },
  { id: 11, code: "+31", country: "Netherlands", isoCode: "NL" },
  { id: 12, code: "+41", country: "Switzerland", isoCode: "CH" },
  { id: 13, code: "+43", country: "Austria", isoCode: "AT" },
  { id: 14, code: "+32", country: "Belgium", isoCode: "BE" },
  { id: 15, code: "+36", country: "Hungary", isoCode: "HU" }
];


