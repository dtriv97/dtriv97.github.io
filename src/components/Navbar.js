import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi'
import './Navbar.css'

const linkList = [
    {
        name: 'Home',
        link: "/"
    },
    {
        name: "About",
        link: "/#about"
    },
    {
        name: "Photography",
        link: "/#photography"
    },
    {
        name: "Contact",
        link: "/#contact"
    }
]

function Navbar() {

    const [buttonToggle, buttonToggleClicked] = useState(false);

    return (
    <nav className="navbar">
        <div className="navbar-container">
            <MenuIcon className="navbar-menu-icon" viewBox="0 0 400 400"/>
            <ul className="navbar-list">
                {linkList.map((entry, idx) => {
                    return (
                        <Link to={entry.link} className = {
                            idx !== (linkList.length - 1) ? 'navbar-link' : 'navbar-link-last'
                        }>
                            <li>
                                {entry.name}
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
