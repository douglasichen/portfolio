export const projects = [
	{
		title: 'Froggi',
		description:"In this fun game, you are a frog. However, you are no ordinary frog. Froggi can grow a stronger and longer tongue to attack it's enemies. This unique frog specimen can also gain extra hops and health. As the only one left of your kind, you must fight off the evil monsters that come wave after wave. How long can you survive?",
		image: '/images/froggiImage.png',
		tags: ['GMS2', 'GML', 'Audacity', 'Garageband'],
		source: 'https://github.com/douglasichen/Froggi',
		visit: 'https://github.com/douglasichen/Froggi',
		id: 0,
	},
	{
		title: 'Local Multiplayer',
		description: "This game is a multiplayer TPS created with Godot Engine's Networking API. Despite this game only having LAN networking support, external players may join via a hamachi server. Users may host or join on-going games via ip-address.",
		image: '/images/LocalMultiplayerImage.png',
		tags: ['Godot Engine', 'GDScript', 'Networking'],
		source: 'https://github.com/douglasichen/Godot-Multiplayer-TPS/tree/master/Godot%20Project',
		visit: 'https://github.com/douglasichen/Godot-Multiplayer-TPS/tree/master/Excecutables',
		id: 1,
	},
	{
		title: 'Medieval Tycoon',
		description: "Medieval Tycoon is a Roblox game developed by Ian Thompson and myself over several months. Players gain gold by farming and stealing. After accumulating enough gold, players are able to upgrade their land. With enough gold, you can afford to buy an army of knights. The knights are yours to command. With the powerful knights, you are able to declare war with neighbors. Will you be strong enough to become the empire of the land?",
		image: '/images/tyc.png',
		tags: ['Roblox Studio', 'Lua'],
		source: 'https://www.roblox.com/games/6244027214/not-done-Medieval-Tycoon',
		visit: 'https://www.roblox.com/games/6244027214/not-done-Medieval-Tycoon',
		id: 2,
	},
	{
		title: 'Trials and Tribulations of Desmond Froid',
		description: "Trials and Tribulations of Desmond Froid had been developed by Spencer Miske, Gabriel Tesfaye, and myself. As the leader and sole programmer, I guided our team to learn Java and video game development. In this dungeon game filled with magic and danger, the ancient wizard defeats his enemies by casting spatial magic. More specifically: Portal Magic. Join the portal wizard as he embarks on his journey to defeat the wicked Desmond Froid, the most powerful fire wizard in the world.",
		image: '/images/PortalGameImage.png',
		tags: ['LibGDX', 'Java', 'Garageband'],
		source: 'https://github.com/douglasichen/PortalGame/tree/WORKING_2022_SEP',
		visit: 'https://github.com/douglasichen/PortalGame/tree/WORKING_2022_SEP',
		id: 3,
	}
	
	
	
	
];

export const TimeLineData = [
	{ year: "2017 July", text: 'Published my first video game', },
	{ year: "2020 September", text: 'Started Competitive Programming', },
	{ year: "2021 January", text: 'Developed Medieval Tycoon', },
	{ year: "2021 August", text: 'Developed Froggi', },
	{ year: "2022 January", text: 'Developed Trials and Tribulations of Desmond Froid', },
	{ year: "2022 July", text: 'SHAD Program at Laurentian University', },
];

export const accom = [
	{ title: "Top 10%", text: 'Junior CCC 2021'},
	{ title: "Top 17%", text: 'Senior CCC 2022', },
	{ title: "SHAD", text: 'SHAD Laurentian 2022', },
];

export const contact = {
	github: {
		title: 'GitHub',
		link: 'https://github.com/douglasichen',
	},
	linkedin: {
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/douglas-chen-19bb96210/',
	},
	discord: {
		title: 'Discord',
		link: 'https://discord.com/channels/@me',
		username: '~Doug#3261',
	},
	phone: {
		title: 'Call',
		number: '+1(647)-804-7967',
	},
	instagram: {
		title: 'Instagram',
		link: 'https://www.instagram.com/doug_568/',
		username: 'doug_568',
	},
	email: {
		title: 'Email',
		emails: ['douglas@ichen.ca'],
	},
};

export const hero = {
	title: 'Douglas Chen',
	description: 'Hi there! Welcome to my portfolio. \nI enjoy playing piano, video games and table tennis. \nBut most of all, I have a burning passion for coding.',
}

import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
export const tech = [
	{ title: 'Computer Languages', content: 'C++, C#, GML, GDScript, Python, Java, Lua, JS, and HTML', icon: DiReact},
	{ title: 'Algorithms & DS', content: 'DMOJ, Codeforces, and LeetCode', icon: DiFirebase},
	{ title: 'Github', content: 'Using Github', icon: DiZend},
];