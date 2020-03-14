import React from 'react'
import styles from "./styles";
import {Text, View} from 'react-native'

const COLUMN_INDICES = [0,1,2,3,4,5,6]
const ROW_INDICES = [5,4,3,2,1,0]

const Grid = () => {
    return (
        <View style={styles.container}>
            {COLUMN_INDICES.map(columnIdx =>
                <View key={columnIdx}>
                    {ROW_INDICES.map(rowIdx =>
                        <View key={rowIdx}>
                            <Text>{`${columnIdx}${rowIdx}`}</Text>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
}

export default Grid
