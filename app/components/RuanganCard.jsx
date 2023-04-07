import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card';

export default function RuanganCard({ 
    indicatorColor, 
    no, 
    onPress,
    status
}) {
    return (
        <Card onPress={onPress}>
            <Text style={[styles.noRuangan]}>{no}</Text>
            <View style={styles.statusRuangan}>
                <FontAwesome 
                    color={indicatorColor} 
                    name='circle' 
                    size={10} 
                    style={styles.statusIndicator} 
                />
                <Text>{status}</Text>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    noRuangan: {
        fontSize: 50
    },
    statusIndicator: {
        marginRight: 10
    },
    statusRuangan: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    }
});