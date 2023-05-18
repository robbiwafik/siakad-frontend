import { StyleSheet, Text, View } from 'react-native';

import colors from '../assets/colors';

export default function AttributeBadge({ color=colors.primary, items }) {
    return (
        <View style={[styles.badge, { backgroundColor: color }]}>
            {items.map((item, index) => (
                <>
                    <View key={item.id} style={styles.attribute}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subTitle}>{item.subTitle}</Text>
                    </View>
                    {index < items.length - 1 && <View style={styles.border} />}
                </>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        width: '100%',
        width: '82%'
    },
    attribute: {
        alignItems: 'center',
        flex: 1,
        paddingVertical: 10
    },
    title: {
        color: colors.white,
        fontSize: 30,
        fontWeight: '600'
    },
    subTitle: {
        color: colors.white
    },
    border: {
        borderColor: colors.white,
        borderRightWidth: 1,
        marginVertical: 10
    }
});