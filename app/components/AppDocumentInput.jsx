import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';
import ErrorMessage from './ErrorMessage';

export default function AppDocumentInput({ onSelectFile, error, label }) {
    const [fileName, setFileName] = useState();

    const handlePickFile = async () => {
        const pickedFile = await DocumentPicker.getDocumentAsync();
        setFileName(pickedFile.name);
        onSelectFile(pickedFile);
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={handlePickFile}>
                <View style={error ? [styles.filePicker, styles.error] : styles.filePicker}>
                    <FontAwesome 
                        color={error ? colors.danger : colors.light} 
                        name='file-text' 
                        size={30} 
                    />
                    <Text 
                        numberOfLines={1} 
                        style={error ? [styles.fileName, styles.error] : styles.fileName}
                    >
                        {fileName ? fileName : label}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <ErrorMessage error={error} visible={true} />
        </>
    );
}

const styles = StyleSheet.create({
    fileName: {
        color: colors.dark,
        fontSize: defaultStyles.inputFontSize,
        marginLeft: 20,
        maxWidth: '85%'
    },
    filePicker: {
        alignItems: 'center',
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        flexDirection: 'row',
        marginVertical: defaultStyles.verticalSpace,
        padding: 16
    },
    error: {
        borderColor: colors.danger,
        color: colors.danger
    }
});