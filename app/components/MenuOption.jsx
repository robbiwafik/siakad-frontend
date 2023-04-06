import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function MenuOption({ Icon, iconName, iconSize=30, label, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Icon name={iconName} size={iconSize} color={colors.primary} />
                </View>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );  
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 60, 
        marginHorizontal: 5,
        marginVertical: 20,
        width: 60
    },
    label: {
        textAlign: 'center'
    },
    wrapper: {
        alignItems: 'center',
        borderColor: colors.primary,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: 2,
        height: '100%',
        justifyContent: 'center',
        marginBottom: 4,
        width: '100%'
    }
});