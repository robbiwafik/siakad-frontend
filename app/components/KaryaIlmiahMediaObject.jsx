import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function KaryaIlmiahMediaObject({ 
    onPress,
    releasedYear, 
    source, 
    title, 
    type
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={source} style={styles.thumbnail} />
                <View style={styles.textContainer}>
                    <Text numberOfLines={2} style={styles.title}>{title}</Text>
                    <Text style={styles.type}>{type}</Text>
                    <Text style={styles.releasedYear}>{releasedYear}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: defaultStyles.borderRadius,
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        width: '100%'
    },
    textContainer: {
        marginLeft: 10,
        width: '70%'
    },
    releasedYear: {
        color: colors.dark
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    thumbnail: {
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        height: 100,
        width: 80
    },
    type: {
        marginBottom: 5
    },
});