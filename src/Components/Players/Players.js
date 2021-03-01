import React, { useEffect, useState } from 'react';
import playersData from '../../PlayersData/PlayersData.json';
import AddPlayers from '../AddPlayers/AddPlayers';
import PlayersInfo from '../PlayersInfo/PlayersInfo';
import './Players.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
const Players = () => {
    const player = playersData;
    const [players, setPlayers] = useState([]);
    const [addPlayers, setAddPlayers] = useState([]);
    useEffect(() => {
        setPlayers(player);
    }, [])
    const handelAddPlayers = (players) => {
        const newAddPlayers = [...addPlayers, players]
        setAddPlayers(newAddPlayers);
    }
    return (
        <Container>
            <div className="players-container">
                <div className="players">
                    {
                        players.map(player => <PlayersInfo
                            players={player}
                            key={player.id}
                            handelAddPlayers={handelAddPlayers}
                        ></PlayersInfo>)
                    }
                </div>
                <div className="total-players">
                    <AddPlayers addPlayers={addPlayers}></AddPlayers>
                </div>
            </div>
        </Container>
    );
};

export default Players;