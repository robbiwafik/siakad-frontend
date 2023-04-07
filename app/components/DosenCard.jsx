import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors';

import Card from './Card';

export default function DosenCard({ 
    name, 
    nip, 
    onPress,
    source
}) {
    return (
        <Card onPress={onPress}>
            <Image 
                source={source} 
                style={styles.photoProfile}
            />
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.name}>{name}</Text>
                <Text style={styles.nip}>{nip}</Text>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    photoProfile: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    textContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    name: {
        fontSize: 16
    },
    nip: {
        color: colors.dark
    }
});