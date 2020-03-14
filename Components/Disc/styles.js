import { StyleSheet } from 'react-native';
import colors from "../../Colors";

const styles = StyleSheet.create({
    disc: {
        backgroundColor: colors.noDisk,
        borderRadius: '50%',
        //temporary quickfix for aspect ratio problem
        width: 50,
        height: 50,
    },
})

export default styles