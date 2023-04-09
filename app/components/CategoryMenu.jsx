import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function CategoryMenu({ title, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.wrapper}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Entypo 
                    color={colors.light} 
                    name='chevron-small-right' 
                    size={25} 
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: defaultStyles.inputFontSize,
        width: '90%'
    },
    wrapper: {
        backgroundColor: colors.white,
        borderColor: colors.light,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 1,
        padding: 15,
        width: '100%'
    }
});