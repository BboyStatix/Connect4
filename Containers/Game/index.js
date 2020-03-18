import React, {useState} from 'react'
import {GAME_STATES} from "../../Config";

const Game = ({children}) => {
    const [gameState, setGameState] = useState(GAME_STATES.IN_PROGRESS)

    return children(gameState, setGameState)
}

export default Game