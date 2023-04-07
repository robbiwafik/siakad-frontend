import { StyleSheet, TextInput } from "react-native";

import colors from "../assets/colors";
import defaultStyles from "../assets/defaultStyles";

export default function SearchBox({ placeholder, ...otherProps }) {
    return (
        <TextInput 
            cursorColor={colors.dark} 
            style={styles.input} 
            placeholder={placeholder}
            {...otherProps}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        color: colors.dark,
        fontSize: defaultStyles.inputFontSize,
        paddingHorizontal: 15,
        paddingVertical: 10
    }
    
});