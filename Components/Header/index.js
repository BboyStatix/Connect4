import React from 'react';
import View from "react-native-web/dist/exports/View";
import styles from "./Styles";
import Text from "react-native-web/dist/exports/Text";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Player 1</Text>
            <Text>Player 2</Text>
        </View>
    )

}

export default Header