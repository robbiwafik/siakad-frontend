import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function TransparentAttribute({
    label,
    iconColor=colors.dark,
    iconName=''
}) {
    return ( 
        <View style={styles.wrapper}>
            <FontAwesome size={20} name={iconName} color={iconColor} />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 22,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        marginLeft: 25,
        fontSize: defaultStyles.inputFontSize
    }
});