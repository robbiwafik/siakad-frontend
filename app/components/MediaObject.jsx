import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function MediaObject({ 
    imageSource, 
    onPress, 
    size=37, 
    subTitle, 
    title 
}) {
    const imageSize = {
        borderRadius: size,
        height: size * 2, 
        width: size * 2
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                {imageSource ?
                <Image source={imageSource} style={[styles.image, imageSize]} /> :
                <View style={[styles.image, imageSize]}>
                    <FontAwesome style={styles.profileIcon} name='user' size={size} />
                </View>}
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        alignItems: 'center',
        borderColor: colors.light,
        borderWidth: defaultStyles.borderWidth,
        justifyContent: 'center',
        marginRight: 15
    },
    profileIcon: {
        color: colors.light
    },
    subTitle: {
        color: colors.dark
    },
    title: {
        fontSize: 20,
        marginBottom: 5
    }
});