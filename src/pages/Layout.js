import React from 'react';
import '../styles/Layout.css';

function Layout({ closeLayout, currentMap }) {
    return (
    <>
        {(currentMap.displayName) ?
        <div className="modalBackground">
            
            <div className="closeBtn">
                <button onClick={() => closeLayout(false)}> X </button>
            </div>
            
                <div className="layout-box">
                    <div className="title">{currentMap.displayName} LAYOUT</div>
                    <img src={currentMap.displayIcon} alt={currentMap.displayName} className="layout-image"/>
                </div>
            
        </div>
        : closeLayout(false)}
    </>
    )
}

export default Layout;