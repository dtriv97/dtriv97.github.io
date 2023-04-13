import React from 'react'
// import useWindowSize from '../utilities/GetWindowWidth'

import './Navbar.css'
// import HeaderBar from "./HeaderBar"
import Sidebar from "./Sidebar"


function Navbar() {
    // const windowDim = useWindowSize();
    return (
    <nav className="navbar navbar-hidden">
        <Sidebar links={linkList} />
    </nav>
  )
}

export default Navbar;
