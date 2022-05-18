import React, { useState, useEffect } from 'react';
import '../styles/Weapons.css';

function Weapons() {
    const [weapons, setWeapons] = useState([]);
    const URL = "https://valorant-api.com/v1/weapons";
    const getWeapons = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setWeapons(data.data);
    }
    console.log(weapons)

    useEffect(() => {
        getWeapons();
    },[])

    return (
        <div className="weapon-body">
            <div className="weapon-title">
                <h1>CHOOSE YOUR WEAPON</h1>
            </div>
            <div className="weapon-main">
                {
                    weapons && weapons.map((weapon) => (
                        <div className="weapon-section">
                            <div className="weapon-name">
                                <h1>{weapon.displayName}.</h1>
                            </div> 
                            <div className="weapon-image">
                                <img src={weapon.displayIcon} alt={weapon.displayName} className="wep-image"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Weapons;
