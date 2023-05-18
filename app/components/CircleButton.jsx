import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../assets/colors';

export default function CircleButton({ style, iconName, onPress }) {
    return (
        <TouchableOpacity style={[styles.btn, style ]} activeOpacity={0.8} onPress={onPress}>
            <FontAwesome name={iconName} size={25} color={colors.white} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 30,
        bottom: 30,
        height: 60,
        justifyContent: 'center'
    }
});