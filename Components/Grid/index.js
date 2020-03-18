import React, {useEffect} from 'react'
import styles from "./styles";
import {TouchableWithoutFeedback, View} from 'react-native';
import Disc from "../Disc";
import {GAME_STATES} from "../../Config";

const Grid = ({gameState, currentPlayer, boardState, insertDisc}) => {
    useEffect(() => {
        if(gameState === GAME_STATES.ENDED) {
            alert(`Player ${currentPlayer} wins!`)
        }
    }, [gameState])

    return (
        <View style={styles.container}>
            {boardState.map((columnOfDiscs, columnIdx) =>
                <TouchableWithoutFeedback
                    key={columnIdx}
                    onPress={() => insertDisc(columnIdx, currentPlayer)}
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
