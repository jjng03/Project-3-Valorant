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
                            <img src={weapon.displayIcon} alt={weapon.displayName} className="weapon-image"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Weapons;
