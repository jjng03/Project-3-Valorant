import React, {useState, useEffect} from 'react';
import '../styles/Agents.css';
import { Link } from 'react-router-dom';

function Agents() {
    const [agents, setAgents] = useState([]);
    const [current, setCurrent] = useState({});

    const url = 'https://valorant-api.com/v1/agents';
    const getAgents = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setAgents(data.data)
    }

    useEffect(()=>{
        getAgents();
    }, []);

    const handleCurrent = (e)=>{
        console.log(e.target.innerText)
        const findCurrent = agents.find(
            (agent)=>agent.displayName.toUpperCase() === e.target.innerText
            );
            console.log(findCurrent)
            setCurrent(findCurrent)
    }
    // console.log(agents)
    return (
        <>
            <div className="agent-section">
                <div className="column1">
                    {
                        agents && agents.map((agent) => (
                            <Link to={`/agents`} key={ agent.uuid } onClick={handleCurrent}>
                                <div className="agent-name">
                                    {(agent.isPlayableCharacter === true) ? <h1>{agent.displayName}</h1> : null}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="column2">    
                    <div className="agent-image">
                        <img src={current.fullPortraitV2} alt={current.displayName}/>
                    </div>
                </div>
                <div className="column3">
                    <div className="agent-info">
                        <p>// ROLE</p>
                        <h2>{current.role && current.role.displayName}<img src={current.role && current.role.displayIcon} className="icon" alt={current.role && current.role.displayName}/></h2>
                        <p>// BIOGRAPHY</p>
                        <p>{current.description}</p>
                    </div>
                </div>
            </div>
            <div className="ability-section">
                <h3>SPECIAL ABILITIES</h3>
                <div className="ability-info">
                    <div className="ability1">
                        <img src={current.abilities && current.abilities[0].displayIcon} className="ability-icon" alt={current.abilities && current.abilities[0].displayName}/>
                        <h4>{current.abilities && current.abilities[0].displayName}</h4>
                        <p>{current.abilities && current.abilities[0].description}</p>
                    </div>
                    <div className="ability2">
                        <img src={current.abilities && current.abilities[1].displayIcon} className="ability-icon" alt={current.abilities && current.abilities[1].displayName}/>
                        <h4>{current.abilities && current.abilities[1].displayName}</h4>
                        <p>{current.abilities && current.abilities[1].description}</p>
                    </div>
                    <div className="ability3">
                        <img src={current.abilities && current.abilities[2].displayIcon} className="ability-icon" alt={current.abilities && current.abilities[2].displayName}/>
                        <h4>{current.abilities && current.abilities[2].displayName}</h4>
                        <p>{current.abilities && current.abilities[2].description}</p>
                    </div>
                    <div className="ability4">
                        <img src={current.abilities && current.abilities[3].displayIcon} className="ability-icon" alt={current.abilities && current.abilities[3].displayName}/>
                        <h4>{current.abilities && current.abilities[3].displayName}</h4>
                        <p>{current.abilities && current.abilities[3].description}</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Agents;
