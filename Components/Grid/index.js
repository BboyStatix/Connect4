import React, { useState } from 'react'
import styles from "./styles";
import {View} from 'react-native';
import Item from "./Item";

const COLUMNS = 7
const ROWS = 6
const COLUMN_INDICES = [0,1,2,3,4,5,6]
const ROW_INDICES = [5,4,3,2,1,0]

/* TODO this logic can be put in a separate file
    with detailed comments explanation */
const initialBoardState = () => {
    const matrix = []
    for(let i = 0; i < COLUMNS; i++) {
        matrix.push([])
        for(let j = 0; j < ROWS; j++) {
            matrix[i].push(null)
        }
    }
    return matrix
}

const Grid = () => {
    //TODO this logic belongs in a Game container rather than Grid
    const [boardState] = useState(initialBoardState())
    const [currentPlayer] = useState(1)

    return (
        <View style={styles.container}>
            {COLUMN_INDICES.map(columnIdx =>
                <View key={columnIdx} style={styles.column}>
                    {ROW_INDICES.map(rowIdx =>
                        <Item key={rowIdx} column={columnIdx} row={rowIdx} />
                    )}
                </View>
            )}
        </View>
    );
}

export default Grid
