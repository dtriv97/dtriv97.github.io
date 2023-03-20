import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-home-link">
                <p>Home</p>
            </Link>
            <Link to="/#About" className="navbar-about-link">
                <p>About</p>
            </Link>
            <Link to="/#Photography" className="navbar-photography-link">
                <p>Photography</p>
            </Link>
            <Link to="/#Contact" className="navbar-contact-link">
                <p>Contact</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar