import React from "react";
import {Text, View} from "react-native";
import styles from "./styles";

const CurrentPlayerIndicator = ({currentPlayer}) => {
    return (
        <View style={styles.container}>
            <Text style={styles[`player${currentPlayer}`]}>
                {`Player ${currentPlayer}'s turn!`}
            </Text>
        </View>
    )
}

export default CurrentPlayerIndicator