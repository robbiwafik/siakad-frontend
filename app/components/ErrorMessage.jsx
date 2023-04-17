import { StyleSheet, Text } from 'react-native';

import colors from '../assets/colors';

export default function ErrorMessage({ error, visible }) {
    if (!visible || !error)
        return null;
    
    return <Text style={styles.error}>{error}</Text>;
}


const styles = StyleSheet.create({
    error: {
        color: colors.danger,
        marginBottom: 10
    }
});