import React, {useState} from 'react'
import {GAME_STATES} from "../../Config";

const Game = ({children}) => {
    const [gameState, setGameState] = useState(GAME_STATES.IN_PROGRESS)
    const [currentPlayer, setCurrentPlayer] = useState(1)

    return children(
        gameState, setGameState,
        currentPlayer, setCurrentPlayer
    )
}

export default Game