import React from 'react';
import {View} from "react-native";
import styles from "./styles";

const Icon = ({player}) => {
    return (
        <View style={[styles.icon, styles[`player${player}`]]}/>
    );
}

export default Icon