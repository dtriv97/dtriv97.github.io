import { useState } from "react";
import "./Sidebar.css";

export interface SidebarLink {
	name: string;
	link: string;
}

interface SidebarProps {
	links: SidebarLink[];
}

export default function Sidebar(props: SidebarProps) {
	const [menuState, menuClicked] = useState(false);
	const { links } = props;

	return (
		<div className="container">
			{/* {!menuState && <MenuIcon className="icon" size={35} onClick={() => menuClicked(!menuState)} />} */}
			<div
				className={
					menuState ? "sidebar-container visible" : "sidebar-container hidden"
				}
			>
				{/* <MenuClose className="icon close" size={35} onClick={() => menuClicked(!menuState)} /> */}
				<ul>
					{links.map((item) => {
						return (
							<li key={item.name}>
								{/* <Link to={item.link} onClick={() => menuClicked(!menuState)}> */}
								{item.name}
								{/* </Link> */}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
