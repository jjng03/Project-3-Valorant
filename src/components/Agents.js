import React, {useState, useEffect} from 'react';

function Agents() {
    const [agents, setAgents] = useState("null");

    const url = 'https://valorant-api.com/v1/agents';
    async function getAgents() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setAgents(data)
    }
    useEffect(()=>{
        getAgents();
    }, []);

    return (
        <div className="section1">
            <div className="agents">
                <h1>Agents</h1>
            </div>
        </div>
    )
}

export default Agents;
