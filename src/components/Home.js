import React from 'react';
import '../styles/Home.css';
import GithubLogo from '../images/GitHub-Logo.png'
function Home() {
    return (
        <div>
            <div className="section1">
                <div className="gallery">
                    
                </div>
            </div>

            <div className="section2">
                <h1>Developed by James Jung</h1>
                <a href="https://github.com/jjng03">
                    <img src={GithubLogo} alt="Github" className="github"/>
                </a>
            </div>
        </div>
    )
}

export default Home;