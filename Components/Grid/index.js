import React, {useEffect, useState} from 'react'
import styles from "./styles";
import {TouchableWithoutFeedback, View} from 'react-native';
import Disc from "../Disc";
import BoardChecker from "./BoardChecker";
import cloneDeep from "lodash.clonedeep"
import {COLUMNS, ROWS} from "../../Config";

/* TODO this logic can be put in a separate file
    with detailed comments explanation */
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

const GAME_STATES = Object.freeze({
    IN_PROGRESS: 'inProgress',
    ENDED: 'ended',
})

const Grid = () => {
    //TODO this logic belongs in a Game container rather than Grid
    const [gameState, setGameState] = useState(GAME_STATES.IN_PROGRESS)
    const [boardState, setBoardState] = useState(initialBoardState())
    const [currentPlayer, setCurrentPlayer] = useState(1)

    async function handlePress(columnIdx) {
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

    const startGame = () => {
        setGameState(GAME_STATES.IN_PROGRESS)
        setBoardState(initialBoardState)
        setCurrentPlayer(1)
    }

    useEffect(() => {
        if(gameState === GAME_STATES.ENDED) {
            alert(`Player ${currentPlayer} wins!`)
        }
    }, [gameState])


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

    return (
        <View style={styles.container}>
            {boardState.map((columnOfDiscs, columnIdx) =>
                <TouchableWithoutFeedback
                    key={columnIdx}
                    onPress={() => handlePress(columnIdx, currentPlayer)}
                >
                    <View style={styles.column}>
                        {columnOfDiscs.map((disc, rowIdx) =>
                            <Disc key={rowIdx} value={disc} />
                        )}
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
}

export default Grid
