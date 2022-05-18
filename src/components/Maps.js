import React, { useState, useEffect } from 'react';
import '../styles/Maps.css'
import { Link } from 'react-router-dom';
import Layout from '../pages/Layout';

function Maps() {
    const [maps, setMaps] = useState([]);
    const [currentMap, setCurrentMap] = useState([]);
    const [openLayout, setOpenLayout] = useState(false);
    // const myRef = useRef();
    // const [myElementIsVisible, setMyElementIsVisible] = useState();
    // console.log(myElementIsVisible)
    // useEffect(() => {
    //     console.log(myRef.current)
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         setMyElementIsVisible(entry.isIntersecting)
    //         // console.log(entry)
    //     })
    //     // observer.observe(myRef.current);
    // })
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
            // console.log(findCurrentMap)
            setCurrentMap(findCurrentMap)
    }

    const handleScroll = (e)=>{
        console.log(e.target.scrollWidth, e.target.scrollLeft)

    }

    return (
        <div className="map-body">
            <h6>MAPS</h6>
            <div className="button-section">
                {/* <button className="back">BACK</button>
                <button className="next">NEXT</button> */}
                <div className="map-main snaps-inline" onScroll={handleScroll}>
                    {
                        maps && maps.map((map)=> (
                            <div className="all-maps">
                                {(map.displayName !== "The Range") ? <img src={map.splash} className="every-map" alt={map.displayName} onClick={handleCurrentMap}/> : null}                              
                            </div>
                        ))
                    }
            
                </div>
                <div className="map-info">
                    <p className="map-name">{ currentMap.displayName }</p>
                    <button className="openLayoutBtn" onClick={() => {setOpenLayout(true)}}>
                        VIEW LAYOUT
                    </button>
                </div>
                <div className="layout">
                    {openLayout && <Layout closeLayout={setOpenLayout} currentMap={currentMap}/>}
                </div>
            </div>
        </div>
    )
}

export default Maps;
