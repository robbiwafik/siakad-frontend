import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

export default function AppPhotoProfileInput({ 
    imageUri, 
    onUploadImage, 
    onDeleteImage, 
    size=100 
}) {
    const [ showMenu, setShowMenu ] = useState();

    const handlePickImage = async () => {
        setShowMenu(!showMenu);

        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
            alert('Anda harus memberikan izin akses gallery untuk mengubah foto profil.');
            return;
        }

        const pickedImage = await ImagePicker.launchImageLibraryAsync();
        onUploadImage(pickedImage);
    }

    const handleRemoveImage = () => {
        setShowMenu(!showMenu);
        onDeleteImage();
    }
    
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => setShowMenu(!showMenu)}>
                {imageUri ?
                <Image 
                    source={{ uri: imageUri }} 
                    style={{ width: size, height: size, borderRadius: size / 2}} 
                /> :
                <View 
                    style={[styles.wrapper, {width: size, height: size, borderRadius: size / 2}]}
                >
                    <FontAwesome name='user' size={size / 2} color={colors.light} />
                </View>}
            </TouchableWithoutFeedback>
            {showMenu && 
            <View style={styles.dropdown}>
                <TouchableWithoutFeedback onPress={handlePickImage}>
                    <Text style={styles.dropdownMenu}>Ubah foto</Text>
                </TouchableWithoutFeedback>
                <View style={styles.line} />
                <TouchableWithoutFeedback onPress={handleRemoveImage}>
                    <Text style={styles.dropdownMenu}>Hapus foto</Text>
                </TouchableWithoutFeedback>
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    dropdown: {
        backgroundColor: colors.white,
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        bottom: -50,
        position: 'absolute',
    },
    dropdownMenu: {
        color: colors.dark,
        fontSize: defaultStyles.inputFontSize,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    editIcon: {
        bottom: 16,
        position: 'absolute',
        right: 3,
        zIndex: 1
    },
    line: {
        backgroundColor: colors.light,
        height: 1,
        width: '100%',
    },
    wrapper: {
        alignItems: 'center',
        borderColor: colors.light,
        borderWidth: defaultStyles.borderWidth,
        justifyContent: 'center',
        overflow: 'hidden'
    }
});