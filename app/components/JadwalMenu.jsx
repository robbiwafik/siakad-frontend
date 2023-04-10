import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function JadwalMenu({ 
    gedung,
    makul,
    onPress, 
    ruangan, 
    waktu
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.wrapper}>
                <View style={styles.makulContainer}>
                    <Text numberOfLines={1} style={styles.makul}>
                        {makul}
                    </Text>
                    <View style={styles.ruanganContainer}>
                        <Text style={styles.ruangan}>{ruangan}</Text>
                        <View style={styles.border} />
                        <Text numberOfLines={1} style={styles.gedung}>
                            {gedung}
                        </Text>
                    </View>
                </View>
                <Text style={styles.waktu}>{waktu}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    border: {
        backgroundColor: colors.light,
        height: '80%',
        marginHorizontal: 8,
        width: 1
    },
    gedung: {
        color: colors.dark
    },
    makul: {
        fontSize: defaultStyles.inputFontSize,
        fontWeight: '600',
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    makulContainer: {
        maxWidth: '70%'
    },
    ruangan: {
        color: colors.primary
    },
    ruanganContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    waktu: {
        color: colors.secondary,
        fontSize: defaultStyles.inputFontSize
    },
    wrapper: {
        alignItems: 'center',
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 1,
        padding: 15,
        width: '100%'
    }
});