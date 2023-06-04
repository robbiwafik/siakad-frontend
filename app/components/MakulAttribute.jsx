import { StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function MakulAttribute({
    makul,
    sksCount,
    score,
    qualityLetter,
    qualityNumber
}) {
    return (
        <View style={styles.wrapper}> 
            <View style={styles.leftAttribute}>
                <Text style={styles.makul} numberOfLines={1}>{makul}</Text>
                <Text style={styles.sksCount}>{sksCount} SKS</Text>
            </View>
            <View style={styles.rightAttribute}>
                <Text style={styles.score}>{score}</Text>
                <View style={styles.border} />
                <Text style={styles.qualityLetter}>{qualityLetter}</Text>
                <Text style={styles.qualityNumber}>{qualityNumber}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        paddingVertical: 7,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    leftAttribute: {
        justifyContent: 'space-between',
        width: '65%'
    },
    makul: {
        marginBottom: 5,
        fontSize: defaultStyles.inputFontSize
    },
    sksCount: {
        color: colors.dark
    },
    rightAttribute: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    border: {
        width: 1,
        backgroundColor: colors.dark,
        height: 40,
        marginHorizontal: 20
    },
    qualityLetter: {
        marginRight: 15,
        color: colors.darkPrimary
    },
    qualityNumber: {
        color: colors.dark
    },
    score: {
        color: colors.secondary
    }
});