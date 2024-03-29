import React from 'react';
import { useState } from 'react';
import { MdMenu as MenuIcon, MdClose as MenuClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ links }) {
	const [menuState, menuClicked] = useState(false);

	return (
		<div className="container">
			{
				!menuState && <MenuIcon className="icon" size={35} onClick={() => menuClicked(!menuState)} />
			}
			<div className={
				menuState ? "sidebar-container visible" : "sidebar-container hidden"
			}>
				<MenuClose className="icon close" size={35} onClick={() => menuClicked(!menuState)} />
				<ul>
					{
						links.map(item => {
							return (
								<li key={item.name}>
									<Link to={item.link} onClick={() => menuClicked(!menuState)}>
										{item.name}
									</Link>
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
