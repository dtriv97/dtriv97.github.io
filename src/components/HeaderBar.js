import { React } from 'react'
import { Link } from 'react-router-dom'
import './HeaderBar.css'

function HeaderBar({ links }) {
    return (
        <div className="headerbar-container">
            <ul className="navbar-list">
                {links.map((entry, idx) => {
                    return (
                        <li>
                            <Link key={entry.name} to={entry.link} className = {
                                idx !== (links.length - 1) ? 'navbar-link' : 'navbar-link last-link'
                            }>
                                {entry.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default HeaderBar;
