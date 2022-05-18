import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
    return (
        <div className="nav-container">
            <Link to ='/'>
                <div className="home-link">HOME</div>
            </Link>
            <Link to ='/agents'>
                <div className="agents-link">AGENTS</div>
            </Link>
            <Link to='/maps'>
                <div className="maps-link">MAPS</div>
            </Link>
            <Link to='/weapons'>
                <div className="weapons-link">WEAPONS</div>
            </Link>
        </div>
    )
}

export default Nav;