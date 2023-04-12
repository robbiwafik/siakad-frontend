import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function Attribute({ title, iconName, iconColor=colors.secondary }) {
    return (
        <View style={styles.wrapper}>
            <FontAwesome 
                color={iconColor}
                name={iconName} 
                size={20} 
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: defaultStyles.inputFontSize,
        marginLeft: 20
    },
    wrapper: {
        alignItems: 'center',
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginVertical: 1,
        padding: 20,
        width: '100%'
    }
});