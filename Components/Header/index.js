import React from 'react';
import { View } from "react-native";
import styles from "./styles";
import PlayerItem from "../PlayerItem";

const Header = () => {
    return (
        <View style={styles.container}>
            <PlayerItem player={1} />
            <PlayerItem player={2} />
        </View>
    )
}

export default Header