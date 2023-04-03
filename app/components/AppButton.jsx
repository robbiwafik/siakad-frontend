import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function AppButton({ color, style, title, ...otherProps }) {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={[styles.button, style]} 
            {...otherProps}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>        
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: defaultStyles.borderRadius,
        justifyContent: 'center',
        padding: 16
    },
    title: {
        color: colors.white,
        fontSize: defaultStyles.inputFontSize
    }
});