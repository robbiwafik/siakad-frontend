import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import localeValidationErrorMessage from '../utils/localeValidationErrMessage';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().min(3).max(20).required().label('Nama depan'),
    last_name: Yup.string().min(3).max(20).required().label('Nama belakang'),
    alamat: Yup.string().required().label('Alamat'),
    email: Yup.string().email().required().label('Email'),
    username: Yup.string().min(6).max(30).required().label('Username'),
    no_hp: Yup.string().min(11).max(13).required().label('No hp'),
    tanggal_lahir: Yup.string()
        .required()
        .label('Tanggal lahir')
        .test('isValidDate', 'Tanggal lahir tidak valid', function(value) {
            const pattern = /^\d{4}-\d{2}-\d{2}$/;
            if (!pattern.test(value))
                return false;

            const timestamp = Date.parse(value)
            return !isNaN(timestamp);
        })
});
Yup.setLocale(localeValidationErrorMessage);

export default function EditAccountMahasiswaScreen() {
    const { errors, values, handleSubmit, handleChange } = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            alamat: '',
            email: '',
            username: '',
            no_hp: '',
            tanggal_lahir: '',
        },
        validationSchema,
        onSubmit: (values) => console.log(values),
        initialErrors: null
    });

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <AppInput 
                    error={errors.first_name} 
                    onChangeText={handleChange('first_name')}
                    placeholder={'Nama depan'} 
                    value={values.first_name}
                />
                <AppInput 
                    error={errors.last_name} 
                    onChangeText={handleChange('last_name')}
                    placeholder={'Nama belakang'} 
                    value={values.last_name} 
                />
                <AppInput 
                    error={errors.alamat} 
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={handleChange('alamat')} 
                    placeholder={'Alamat'} 
                    value={values.alamat}
                />
                <AppInput 
                    autoCapitalize={'none'}
                    error={errors.email} 
                    keyboardType={'email-address'}
                    onChangeText={handleChange('email')} 
                    placeholder={'Email'} 
                    value={values.email}
                />
                <AppInput 
                    autoCapitalize={'none'}
                    error={errors.username} 
                    onChangeText={handleChange('username')} 
                    placeholder={'Username'} 
                    value={values.username}
                />
                <AppInput 
                    error={errors.no_hp} 
                    keyboardType={'phone-pad'}
                    onChangeText={handleChange('no_hp')} 
                    placeholder={'No hp'} 
                    value={values.no_hp} 
                />
                <AppInput 
                    error={errors.tanggal_lahir} 
                    onChangeText={handleChange('tanggal_lahir')} 
                    placeholder={'Tanggal lahir (YYYY-MM-DD)'} 
                    value={values.tanggal_lahir}
                    keyboardType={'numeric'}
                />
                <AppButton 
                    onPress={handleSubmit} 
                    style={styles.btn} 
                    title={'Simpan'} 
                />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginVertical: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 30,
        paddingVertical: 15
    }
});