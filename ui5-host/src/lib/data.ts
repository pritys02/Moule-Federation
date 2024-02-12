const sideItems = [
	{
		text: "Something",
		icon: "home",
		path: "/home",
		subItems: [
			{
				icon: "addresses",
				text: "Subitem 1 for Home",
				path: "/subitem1",
			},
			{
				icon: "home-share",
				text: "Subitem 2 for Home",
				path: "/subitem2",
			},
			{
				icon: "activities",
				text: "Subitem 3 for Home",
				path: "/subitem3",
			},
		],
	},
	{
		text: "People",
		icon: "group",
		path: "/people",
		subItems: [
			{
				icon: "account",
				text: "Subitem for People",
				path: "/SubitemPeople",
			},
		],
	},
	{
		text: "Location",
		icon: "locate-me",
		path: "/location",
	},
];

export default sideItems;
