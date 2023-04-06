import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../assets/colors";
import defaultStyles from "../assets/defaultStyles";

export default function PemberitahuanCard({ source, subTitle, title }) {
    return (
        <View style={styles.container}>
            <Image style={styles.thumbnail}  source={source} />
            <View style={styles.textContainer}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: defaultStyles.borderRadius,
        height: 300,
        marginVertical: 10,
        overflow: 'hidden',
        width: '100%'
    },
    subTitle: {
        color: colors.dark
    },
    thumbnail: {
        height: '67%',
        resizeMode: 'cover',
        width: '100%'
    },
    textContainer: {
        padding: 15
    },
    title: {
        fontSize: 17,
        marginBottom: 4
    }
});