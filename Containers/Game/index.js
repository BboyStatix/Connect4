import React, {useState} from 'react'
import {COLUMNS, GAME_STATES, ROWS} from "../../Config";
import cloneDeep from "lodash.clonedeep";
import BoardChecker from "./BoardChecker";

const initialBoardState = () => {
    const matrix = []
    for (let i = 0; i < COLUMNS; i++) {
        matrix.push([])
        for (let j = 0; j < ROWS; j++) {
            matrix[i].push(null)
        }
    }
    return matrix
}

const Game = ({children}) => {
    const [gameState, setGameState] = useState(GAME_STATES.IN_PROGRESS)
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [boardState, setBoardState] = useState(initialBoardState())

    const startGame = () => {
        setGameState(GAME_STATES.IN_PROGRESS)
        setBoardState(initialBoardState)
        setCurrentPlayer(1)
    }

    async function insertDisc(columnIdx) {
        if(gameState !== GAME_STATES.ENDED) {
            const rowIdx = getAvailableDiscSlot(columnIdx)
            if(rowIdx !== -1) {
                const boardStateClone = cloneDeep(boardState)
                boardStateClone[columnIdx][rowIdx] = currentPlayer
                setBoardState(boardStateClone)
                const boardChecker = BoardChecker(boardStateClone, {columnIdx, rowIdx})
                const fourInARow = await boardChecker.fourInARow()
                if(fourInARow) {
                    setGameState(GAME_STATES.ENDED)
                } else {
                    togglePlayer(currentPlayer)
                }
            }
        } else {
            startGame()
        }
    }

    const getAvailableDiscSlot = (columnIdx) => {
        const discColumn = boardState[columnIdx];
        return discColumn.findIndex((disc) =>
            disc === null
        )
    }

    const togglePlayer = (currentPlayer) => {
        switch (currentPlayer) {
            case 1:
                return setCurrentPlayer(2)
            case 2:
                return setCurrentPlayer(1)
        }
    }

    return children(gameState, currentPlayer, boardState, insertDisc)
}

export default Game