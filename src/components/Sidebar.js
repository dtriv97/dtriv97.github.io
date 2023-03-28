import { React, useState } from 'react'
import { MdMenu as MenuIcon, MdClose as MenuClose } from 'react-icons/md'
import './Sidebar.css'

function Sidebar({ links }) {
	const [menuState, menuClicked] = useState(false);

	return (
		<div className="container">
			{
				!menuState && <MenuIcon className="icon" onClick={() => {
					menuClicked(!menuState);
				}} />
			}
			<div className={
				menuState ? "sidebar-container visible" : "sidebar-container hidden"
			}>
				<MenuClose className="icon close" onClick={() => {
					menuClicked(!menuState);
				}} />
				<ul>
					{
						links.map(item => {
							return (
								<li key={item.name}>
									<a href={item.link}>
										{item.name}
									</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
};

export default Sidebar;
