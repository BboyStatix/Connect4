import { StyleSheet } from 'react-native';
import colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        //TODO aspectRatio not working for some reason
        aspectRatio: 1,
    },
    disc: {
        backgroundColor: colors.noDisk,
        borderRadius: 50,
        //temporary quickfix for aspect ratio problem
        width: 50,
        height: 50,
        marginVertical: 5,
    },
})

export default styles