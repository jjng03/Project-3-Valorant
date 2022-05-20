import React, {useState, useEffect} from 'react';
import '../styles/Agents.css';
import { Link } from 'react-router-dom';

function Agents() {
    // ==== USE STATE FUNCTIONS ==== \\
    const [agents, setAgents] = useState([]);
    const [currentAgent, setCurrentAgent] = useState({});

    // ==== API URL ==== \\
    const url = 'https://valorant-api.com/v1/agents';

    // ==== FETCH API AND RETURN JSON DATA ==== \\
    const getAgents = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setAgents(data.data)
    }

    // ==== RUN FUNCTION AFTER RENDERING ==== \\
    useEffect(()=>{
        getAgents();
    }, []);

    // ==== FIND AGENT DATA WHEN TARGETING THE AGENT'S NAME ==== \\
    const handleCurrentAgent = (e)=>{
        // console.log(e.target.innerText)
        const findCurrentAgent = agents.find(
            (agent)=>agent.displayName.toUpperCase() === e.target.innerText
            );
            setCurrentAgent(findCurrentAgent);
    }

    return (
        <>
            <div className="agent-section">
                <div className="column1">
                    {
                        agents && agents.map((agent) => (
                            // ==== WHEN AGENT NAME IS CLICKED THEN RUN handleCurrentAgent FUNCTION TO GRAB THE AGENT'S DATA==== \\
                            <Link to={`/agents`} key={ agent.uuid } onClick={handleCurrentAgent}>
                                <div className="agent-name">
                                    {(agent.isPlayableCharacter === true) ? <h1>{agent.displayName}</h1> : null}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="column2">    
                    <div className="agent-image">
                        <img src={currentAgent.fullPortraitV2} alt={currentAgent.displayName} className="agent-portrait "/>
                    </div>
                </div>
                <div className="column3">
                {(currentAgent.displayName) ?
                    <div className="agent-info">
                        <p>// ROLE</p>
                        <h2>{currentAgent.role && currentAgent.role.displayName}<img src={currentAgent.role && currentAgent.role.displayIcon} className="icon" alt={currentAgent.role && currentAgent.role.displayName}/></h2>
                        <p>// BIOGRAPHY</p>
                        <p>{currentAgent.description}</p>
                    </div>
                    : <p>CLICK AN AGENT</p>}
                </div>
            </div>
            <div className="ability-section">
            {(currentAgent.displayName) ?
                <div className="ability-main">
                    <h3>SPECIAL ABILITIES</h3>
                    <div className="ability-info">

                        <div className="ability1">
                            <img src={currentAgent.abilities && currentAgent.abilities[0].displayIcon} className="ability-icon" alt={currentAgent.abilities && currentAgent.abilities[0].displayName}/>
                            <h4>{currentAgent.abilities && currentAgent.abilities[0].displayName}</h4>
                            <p>{currentAgent.abilities && currentAgent.abilities[0].description}</p>
                        </div>
                        <div className="ability2">
                            <img src={currentAgent.abilities && currentAgent.abilities[1].displayIcon} className="ability-icon" alt={currentAgent.abilities && currentAgent.abilities[1].displayName}/>
                            <h4>{currentAgent.abilities && currentAgent.abilities[1].displayName}</h4>
                            <p>{currentAgent.abilities && currentAgent.abilities[1].description}</p>
                        </div>
                        <div className="ability3">
                            <img src={currentAgent.abilities && currentAgent.abilities[2].displayIcon} className="ability-icon" alt={currentAgent.abilities && currentAgent.abilities[2].displayName}/>
                            <h4>{currentAgent.abilities && currentAgent.abilities[2].displayName}</h4>
                            <p>{currentAgent.abilities && currentAgent.abilities[2].description}</p>
                        </div>
                        <div className="ability4">
                            <img src={currentAgent.abilities && currentAgent.abilities[3].displayIcon} className="ability-icon" alt={currentAgent.abilities && currentAgent.abilities[3].displayName}/>
                            <h4>{currentAgent.abilities && currentAgent.abilities[3].displayName}</h4>
                            <p>{currentAgent.abilities && currentAgent.abilities[3].description}</p>
                        </div>
                    </div>
                </div>
                : null}
            </div>
        </>
        
    )
}

export default Agents;
