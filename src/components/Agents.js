import React, {useState, useEffect} from 'react';
import '../styles/Agents.css';

function Agents() {
    const [agents, setAgents] = useState([]);

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

    console.log(agents)
    return (
        <div className="agent-container">
            {
                agents.map((agent) => (
                    // console.log(agent)
                    <div className="agents">
                        <div className="agent-image">
                            <img src={agent.fullPortraitV2} alt={agent.displayName} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Agents;
