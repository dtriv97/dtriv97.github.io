import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <MenuIcon className="navbar-menu-icon"/>
            <ul>
                <Link to="/" className="navbar-link">
                    <li>Home</li>
                </Link>
                <Link to="/#About" className="navbar-link">
                    <li>About</li>
                </Link>
                <Link to="/#Photography" className="navbar-link">
                    <li>Photography</li>
                </Link>
                <Link to="/#Contact" className="navbar-link">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar