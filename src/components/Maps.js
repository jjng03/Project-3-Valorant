import React, {useState, useEffect} from 'react';
import '../styles/Maps.css'
import { Link } from 'react-router-dom';

function Maps() {
    const [maps, setMaps] = useState([]);
    const [currentMap, setCurrentMap] = useState([]);

    const url = 'https://valorant-api.com/v1/maps';
    const getMaps = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setMaps(data.data)
    }
    // console.log(maps)

    useEffect(()=>{
        getMaps();
    }, []);

    const handleCurrentMap = (e)=>{
        console.log(e.target.alt)
        const findCurrentMap = maps.find(
            // targeting the alt of the img tag
            (map)=>map.displayName === e.target.alt
            );
            console.log(findCurrentMap)
            setCurrentMap(findCurrentMap)
    }

    const handleScroll = (e)=>{
        console.log(e.target.scrollWidth, e.target.scrollLeft)

    }

    return (
        <div className="map-main">
            <h6>MAPS</h6>
            <div className="button-section">
                <button className="back">BACK</button>
                <button className="next">NEXT</button>
                <div className="map-section snaps-inline" onScroll={handleScroll}>
                    {
                        maps && maps.map((map)=> (
                            <div className="all-maps">
                                {/* <Link to='/maps' key={ map.uuid } onClick={handleCurrentMap}> */}
                                    <img src={map.splash} className="every-map" alt={map.displayName} onClick={handleCurrentMap}/>
                                {/* </Link> */}
                            </div>
                        ))
                    }
            
                </div>
                <div className="map-info">
                    <p className="map-name">{ currentMap.displayName }</p>
                    <Link to='/maps/layout' key={ currentMap.uuid } onClick={handleCurrentMap}>
                        <p className="layout">view layout</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Maps;
