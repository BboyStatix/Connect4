import React from 'react'
import { View } from 'react-native'
import styles from "./styles";
import colors from "../../Colors";

const Disc = ({value}) => {
    const customStyle = (value) => {
        switch (value) {
            case 1:
                return {backgroundColor: colors.player1}
            case 2:
                return {backgroundColor: colors.player2}
            default:
                return {}
        }
    }
    return (
        <View style={styles.container}>
            <View style={[styles.disc, customStyle(value)]} />
        </View>
    );
}

export default Disc
