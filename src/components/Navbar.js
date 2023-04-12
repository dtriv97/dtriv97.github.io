import React from 'react'
// import useWindowSize from '../utilities/GetWindowWidth'

import './Navbar.css'
// import HeaderBar from "./HeaderBar"
import Sidebar from "./Sidebar"

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
    // const windowDim = useWindowSize();
    return (
    <nav className="navbar navbar-hidden">
        <Sidebar links={linkList} />
    </nav>
  )
}

export default Navbar;
