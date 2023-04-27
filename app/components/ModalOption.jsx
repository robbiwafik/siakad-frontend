import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function ModalOption({ label, onSelect, active=false }) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={active ? [styles.category, styles.active] : styles.category}>
                <Text 
                    style={active ? [styles.categoryLabel, styles.active] : styles.categoryLabel}
                >
                    {label}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    active: {
        borderColor: colors.primary,
        color: colors.primary
    },
    category: {
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        marginVertical: 5,
        padding: 13,
        width: '100%'
    },
    categoryLabel: {
        color: colors.dark,
        fontSize: defaultStyles.inputFontSize
    }
});