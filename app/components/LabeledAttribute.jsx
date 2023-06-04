import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';


export default function LabeledAttribute({
    iconColor=colors.secondary,
    iconName,
    value,
    label
}) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <FontAwesome
                color={iconColor}
                name={iconName} 
                size={20} 
            />
            <Text style={styles.title}>{value}</Text>
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
        marginTop: 1,
        marginBottom: 2,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 15,
        width: '100%',
    },
    label: {
        position: 'absolute',
        top: 0,
        left: 17,
        fontSize: 15,
        color: colors.dark
    }
});