import React from 'react';
import {View, Text} from "react-native";
import Icon from "./Icon";

const PlayerItem = ({player}) => {
    return (
        <View>
            <Icon player={player}/>
            <Text>Player {player}</Text>
        </View>
    )
}

export default PlayerItem