import React from 'react';
import Nav from './Nav';
import '../styles/Home.css';

function Home() {
    return (
        <div>
            <div className="section1">
                <Nav />
            </div>

            <div className="section2">
                <div className="gallery">
                    <h1>Hello World!</h1>
                </div>
            </div>

            <div className="section3">

            </div>
        </div>
    )
}

export default Home;