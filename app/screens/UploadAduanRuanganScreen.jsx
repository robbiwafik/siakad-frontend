import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AppInput from '../components/AppInput';
import AppImageCamInput from '../components/AppImageCamInput';
import AppButton from '../components/AppButton';
import localValidationErrorMessage from '../utils/localeValidationErrMessage';

const validationSchema = Yup.object().shape({
    detail: Yup.string().required().label('Detail'),
    foto: Yup.string()
});
Yup.setLocale(localValidationErrorMessage)

export default function UploadAduanRuanganScreen() {
    const formik = useFormik({
        initialValues: {
            detail: '',
            foto: '',
        },
        onSubmit: (values) => console.log(values),
        validationSchema,
        initialErrors: null
    });

    const handleTakeImage = ({ uri }) => {
        formik.setFieldValue('foto', uri);
    }

    const handleDeleteImage = () => {
        formik.setFieldValue('foto', '');
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <AppInput 
                    error={formik.errors.detail}
                    numberOfLines={6} 
                    onBlur={() => formik.setFieldTouched('detail')}
                    onChangeText={formik.handleChange('detail')}
                    placeholder={'Detail'} 
                    touched={formik.touched}
                    value={formik.values.detail} 
                />
                <AppImageCamInput 
                    onDeleteImage={handleDeleteImage} 
                    onTakeImage={handleTakeImage} 
                />
                <AppButton 
                    onPress={formik.handleSubmit} 
                    style={styles.button} 
                    title={'Kirim'} 
                />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20
    },
    container: {
        paddingHorizontal: 30,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});