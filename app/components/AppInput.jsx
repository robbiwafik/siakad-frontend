import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';
import ErrorMessage from './ErrorMessage';

export default function AppInput({
    error, 
    placeholder, 
    value, 
    ...otherProps}
) {
    const [isFocus, setIsFocus] = useState(false);

    const getPlaceholderStyle = () => {
        const placeholderStyle = [styles.placeholder]
        if (isFocus) 
            placeholderStyle.push(styles.placeholderOnBorder, {color: colors.primary})
        else if (value)
            placeholderStyle.push(styles.placeholderOnBorder)

        if (error)
            placeholderStyle.push({color: colors.danger})

        return placeholderStyle
    }

    const getInputStyle = () => {
        const inputStyle = [styles.input];
        if (isFocus) inputStyle.push(styles.inputFocus);
        if (error) inputStyle.push({borderColor: colors.danger});

        return inputStyle;
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    onEndEditing={() => setIsFocus(false)}
                    onFocus={() => setIsFocus(true)}
                    selectionColor={colors.dark}
                    style={getInputStyle()}
                    {...otherProps}
                    placeholder=''
                />
                <Text style={getPlaceholderStyle()}>
                    {placeholder}
                </Text>
            </View>
            <ErrorMessage error={error} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        fontSize: defaultStyles.inputFontSize,
        padding: 16,
        width: '100%'
    },
    inputFocus: {
        borderColor: colors.primary
    },
    inputWrapper: {
        paddingVertical: defaultStyles.verticalSpace
    },
    placeholder: {
        color: colors.dark,
        fontSize: defaultStyles.inputFontSize,
        paddingHorizontal: 16,
        position: 'absolute',
        top: '50%'
    },
    placeholderOnBorder: {
        backgroundColor: colors.white,
        left: 10,
        top: -3,
        zIndex: 1
    }
});
