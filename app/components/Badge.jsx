import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function Badge({ children, style, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.badge, style]}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: colors.white,
        borderRadius: defaultStyles.borderRadius,
        paddingHorizontal: 15,
        paddingVertical: 10
    }
});