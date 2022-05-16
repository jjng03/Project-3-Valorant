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
                        <h2>{current.role && current.role.displayName}<img src={current.role && current.role.displayIcon} className="icon"/></h2>
                        <p>// BIOGRAPHY</p>
                        <p>{current.description}</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Agents;
