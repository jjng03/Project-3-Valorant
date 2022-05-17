import React, {useState, useEffect} from 'react';
import '../styles/Maps.css'

function Maps() {
    const [maps, setMaps] = useState([]);

    const url = 'https://valorant-api.com/v1/maps';
    const getMaps = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setMaps(data.data)
    }
    console.log(maps)

    useEffect(()=>{
        getMaps();
    }, []);

    return (
        <div className="map-main">
            <h6>MAPS</h6>
            <div className="map-section snaps-inline">
                {
                    maps && maps.map((map)=> (
                        <div className="allMaps">
                            <img src={map.splash} className="every-map" alt=""/>
                            {/* <h6>{map.displayName}</h6> */}
                        </div>
                    ))
                }
                {/* <div className="allMaps">
                    <h6>Maps</h6>
                </div> */}
            </div>
            <div className="map-info">
                <h7>Hello</h7>
            </div>
        </div>
    )
}

export default Maps;
