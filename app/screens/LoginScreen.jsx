import { Image, StyleSheet, Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { alphanumeric } from '../utils/regex';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import customValidationErrMessage from '../utils/localeValidationErrMessage';

const authValidationSchema = Yup.object().shape({
    username: Yup
        .string()
        .matches(alphanumeric, 'Username harus alphanumeric')
        .min(6)
        .max(50)
        .label('Username')
        .required(),
    password: Yup.string().required()
});
Yup.setLocale(customValidationErrMessage);

export default function LoginScreen() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => console.log(values),
        validationSchema: authValidationSchema,
        initialErrors: null
    });

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <View style={styles.form}>
                <AppInput 
                    autoCapitalize={'none'}
                    error={formik.errors['username']}
                    onBlur={() => formik.setFieldTouched('username')}
                    onChangeText={formik.handleChange('username')} 
                    placeholder={'Username'} 
                    touched={formik.touched.username}
                    value={formik.values.username} 
                />                
                <AppInput 
                    error={formik.errors['password']} 
                    onBlur={() => setFieldTouched('password')}
                    onChangeText={formik.handleChange('password')}
                    placeholder={'Password'} 
                    secureTextEntry={true}
                    touched={formik.touched.password}
                    value={formik.values.password} 
                />
                <AppButton 
                    onPress={formik.handleSubmit} 
                    style={styles.button} 
                    title={'Masuk'} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 30
    },
    container: {
        alignItems: 'center',
        flex: 1
    },
    form: {
        padding: 30,
        position: 'relative',
        top: 210,
        width: '100%'
    },
    logo: {
        alignItems: 'center',
        height: 200,
        position: 'relative',
        top: 200,
        width: 200
    }
});