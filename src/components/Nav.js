import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
    return (
        <div className="nav-container">
            <Link to ='/agents'>
                <div>AGENTS</div>
            </Link>
            <Link to='/maps'>
                <div>MAPS</div>
            </Link>
            <Link to='/weapons'>
                <div>WEAPONS</div>
            </Link>
        </div>
    )
}

export default Nav;