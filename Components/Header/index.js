import React from 'react';
import { View } from "react-native";
import styles from "./styles";
import Player from "../Player";

const Header = () => {
    return (
        <View style={styles.container}>
            <Player player={1} />
            <Player player={2} />
        </View>
    )
}

export default Header