import { StyleSheet } from 'react-native';
import colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
    player1: {
        backgroundColor: colors.player1
    },
    player2: {
        backgroundColor: colors.player2
    },
})

export default styles