import React, {useState} from 'react'
import styles from "./styles";
import {View, TouchableWithoutFeedback} from 'react-native';
import Disc from "../Disc";

const COLUMNS = 7
const ROWS = 6

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

const Grid = () => {
    //TODO this logic belongs in a Game container rather than Grid
    const [boardState, setBoardState] = useState(initialBoardState())
    const [currentPlayer, setCurrentPlayer] = useState(1)

    const handlePress = (columnIdx) => {
        const availableDiscSlot = getAvailableDiscSlot(columnIdx)
        if(availableDiscSlot !== -1) {
            const boardStateClone = [...boardState]
            boardStateClone[columnIdx][availableDiscSlot] = currentPlayer
            setBoardState(boardStateClone)
            togglePlayer(currentPlayer)
        }
    }

    const getAvailableDiscSlot = (columnIdx) => {
        return boardState[columnIdx].findIndex((disc) =>
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
