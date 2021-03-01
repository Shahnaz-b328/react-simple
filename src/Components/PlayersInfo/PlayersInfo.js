import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayersInfo.css'
const PlayersInfo = (props) => {
    const { image, name, salary } = props.players;
    return (
        <div className="players-info">
            <img src={image} alt="" />
            <h4>Name: {name}</h4>
            <p>salary: {salary}</p>
            <button className="count-players" onClick={() => props.handelAddPlayers(props.players)}><FontAwesomeIcon icon={faPlus} />
Add Players Info</button>
        </div>

    );
};

export default PlayersInfo;