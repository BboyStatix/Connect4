import React from 'react'
import styles from "./styles";
import { View } from 'react-native'
import Disc from "../../Disc";

const Item = ({column, row}) => {
    return (
        <View style={styles.container}>
            <Disc/>
        </View>
    );
}

export default Item
