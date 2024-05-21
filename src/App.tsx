import "./App.css";
import Body from "./components/Body";
import Sidebar, { type SidebarLink } from "./components/Sidebar";

const linkList: SidebarLink[] = [
	{
		name: "Intro",
		link: "/",
	},
	{
		name: "About",
		link: "about",
	},
	{
		name: "Skills",
		link: "skills",
	},
	{
		name: "Photography",
		link: "photography",
	},
	{
		name: "Contact",
		link: "contact",
	},
];

export default function App() {
	return (
		<>
			<Sidebar {...linkList} />
			<Body />
		</>
	);
}
