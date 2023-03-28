import { Link } from "react-router-dom"
import React from 'react'
import useWindowSize from '../utilities/GetWindowWidth'

import './Navbar.css'
import HeaderBar from "./HeaderBar"
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
    const windowDim = useWindowSize();
    return (
    <nav className="navbar">
        {
            windowDim.width > 1000 ? < HeaderBar links={ linkList } /> : < Sidebar links={ linkList } />
        }
    </nav>
  )
}

export default Navbar;
