import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function Card({ children, onPress }) {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: defaultStyles.borderRadius,
        height: 170,
        height: 180,
        margin: 10,
        padding: 20,
        width: 150
    }
});