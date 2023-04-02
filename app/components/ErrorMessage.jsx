import { StyleSheet, Text } from 'react-native';

import colors from '../assets/colors';

export default function ErrorMessage({ error }) {
    if (!error)
        return null;
    
    return <Text style={styles.error}>{error}</Text>;
}


const styles = StyleSheet.create({
    error: {
        color: colors.danger,
        marginBottom: 10
    }
});