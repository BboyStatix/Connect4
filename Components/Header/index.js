import React from 'react';
import View from "react-native-web/dist/exports/View";
import styles from "./styles";
import Text from "react-native-web/dist/exports/Text";

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={[styles.icon, styles.player1]} />
                <Text>Player 1</Text>
            </View>
            <View>
                <View style={[styles.icon, styles.player2]} />
                <Text>Player 2</Text>
            </View>
        </View>
    )

}

export default Header