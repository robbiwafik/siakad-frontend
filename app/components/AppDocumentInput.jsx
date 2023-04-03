import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';
import ErrorMessage from './ErrorMessage';

export default function AppDocumentInput({ onPickFile, error }) {
    const [fileName, setFileName] = useState();

    const pickFile = async () => {
        const pickedFile = await DocumentPicker.getDocumentAsync();
        setFileName(pickedFile.name);
        onPickFile(pickedFile);
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={pickFile}>
                <View style={error ? [styles.filePicker, {borderColor: colors.danger}] : styles.filePicker}>
                    <FontAwesome name='file-text' size={30} color={error ? colors.danger : colors.light} />
                    <Text numberOfLines={1} style={styles.fileName}>{fileName ? fileName : 'Pilih File'}</Text>
                </View>
            </TouchableWithoutFeedback>
            <ErrorMessage error={error} />
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
    }
});