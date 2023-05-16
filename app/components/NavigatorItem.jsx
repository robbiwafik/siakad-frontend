import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import colors from '../assets/colors';

export default function NavigatorItem({ title, onPress, active }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Text style={active ? [styles.navItem, styles.active] : [styles.navItem]}>
                {title}
            </Text>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    navItem: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    active: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1
    }
});