import React from 'react'
import styles from "./styles";
import {View} from 'react-native';
import Item from "./Item";

const COLUMN_INDICES = [0,1,2,3,4,5,6]
const ROW_INDICES = [5,4,3,2,1,0]

const Grid = () => {
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
