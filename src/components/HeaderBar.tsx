import { Link } from 'react-router-dom';
import './HeaderBar.css';

interface HeaderLink {
    name: string
    link: string
}

export interface HeaderBarProps {
    links: HeaderLink[]
}

export default function HeaderBar(props: HeaderBarProps) {
    const {links} = props
    
    return (
        <div className="headerbar-container">
            <ul className="navbar-list">
                {links.map((entry, idx) => {
                    return (
                        <li key={entry.link}>
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