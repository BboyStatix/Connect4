import React from 'react';
import {View, Text} from "react-native";
import Icon from "./Icon";

const Player = ({player}) => {
    return (
        <View>
            <Icon player={player}/>
            <Text>Player {player}</Text>
        </View>
    )
}

export default Player