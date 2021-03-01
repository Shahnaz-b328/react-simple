import React from 'react';
import './AddPlayers.css'
const AddPlayers = (props) => {
    const addPlayers = props.addPlayers;
    const names = addPlayers.reduce((names, players) => names + players.name, '')
    const salary = addPlayers.reduce((salary, players) => salary + players.salary, [])
    const budget = addPlayers.reduce((budget, currentValue) => {
        return budget + parseInt(currentValue.salary)

    }, [])

    return (
        <div className="text-design">
            <h1>Total Players: {addPlayers.length}</h1>
            <p>Name: {names}</p>
            <p>Salary: {salary}</p>
            <p>Budget:{budget}</p>
        </div>
    );
};

export default AddPlayers;