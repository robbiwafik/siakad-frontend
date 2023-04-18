import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';
import { useState } from 'react';

export default function AppImageCamInput({ onTakeImage, onDeleteImage }) {
    const [imageUri, setImageUri] = useState();

    const deleteImage = () => {
        Alert.alert('Hapus Foto', 'Anda yakin ingin menghapus foto ini?', [
            {text: 'Ya', onPress: () => setImageUri(null)},
            {text: 'Tidak'}
        ])

        onDeleteImage();
    }

    const takeImage = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            alert('Anda harus memberikan akses untuk menggunakan kamera dari aplikasi ini');
            return;
        }

        const pickedImage = await ImagePicker.launchCameraAsync();
        if (pickedImage) {
            setImageUri(pickedImage.uri);
            onTakeImage(pickedImage);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={imageUri ? deleteImage : takeImage}>
            <View style={styles.container}>
                {imageUri ? 
                <Image source={{ uri: imageUri }} style={[styles.container]} /> :
                <>
                    <FontAwesome5 name='camera' size={50} color={colors.light} />
                    <Text style={styles.text}>Tambah Foto</Text>
                </>
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        height: 250,
        justifyContent: 'center',
        marginVertical: defaultStyles.verticalSpace,
        width: '100%'
    },
    text: {
        color: colors.light,
        fontSize: defaultStyles.fontSize,
        marginTop: 3
    }
});