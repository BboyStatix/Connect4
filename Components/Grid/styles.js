import { StyleSheet } from 'react-native';
import colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.gridBackground,
    },
    column: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
})

export default styles