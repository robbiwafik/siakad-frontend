import { useFormik } from 'formik';
import { ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppCategoryInput from '../components/AppCategoryInput';
import AppDocumentInput from '../components/AppDocumentInput';
import AppInput from '../components/AppInput';
import Screen from '../components/Screen';
import localeValidationErrMessage from '../utils/localeValidationErrMessage';

/* This array should be fetched from the backend to avoid un-persistence data,
 but the current backend version doesn't provide an API for this array,
 TODO: Communicate with the backend team and refactor this array in the future! */
const karyaIlmiahType = [
    {
        'label': 'Laporan Magang',
        'code': 'LM'
    },
    {
        'label': 'Tugas Akhir',
        'code': 'TA'
    },
    {
        'label': 'Skripsi',
        'code': 'S'
    }
];

const validationSchema = Yup.object().shape({
    judul: Yup.string().min(10).max(255).required().label('Judul'),
    abstrak: Yup.string().required().label('Abstrak'),
    link_versi_full: Yup.string().label('Link versi full'),
    tipe: Yup.string().min(1).max(2).required().label('Tipe'),
    file_preview: Yup.string().required().label('File preview')
});
Yup.setLocale(localeValidationErrMessage);

export default function EditUploadKaryaIlmiahScreen() {
    const { values, errors, handleChange, setFieldTouched, touched, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            judul: '',
            abstrak: '',
            link_versi_full: '',
            tipe: '',
            file_preview: ''
        },
        onSubmit: (values) => {console.log(values)},
        validationSchema,
        initialErrors: null
    });

    const handleSelectType = (type) => {
        setFieldTouched('tipe', type.code);
        setFieldValue('tipe', type.code);
    }

    const handleSelectFile = (pickedFile) => {
        setFieldTouched('file_preview', pickedFile.uri);
        setFieldValue('file_preview', pickedFile.uri);
    }

    return (
        <ScrollView>
            <Screen style={styles.container}>
                <AppInput  
                    error={errors.judul}
                    onBlur={() => setFieldTouched('judul')}
                    onChangeText={handleChange('judul')} 
                    placeholder={'Judul'} 
                    touched={touched.judul}
                    value={values.judul} 
                />
                <AppInput 
                    error={errors.abstrak}
                    numberOfLines={5}
                    onBlur={() => setFieldTouched('abstrak')}
                    onChangeText={handleChange('abstrak')}
                    placeholder={'Abstrak'} 
                    touched={touched.abstrak}
                    value={values.abstrak}
                />
                <AppInput 
                    error={errors.link_versi_full}
                    onBlur={() => setFieldTouched('link_versi_full')}
                    onChangeText={handleChange('link_versi_full')}
                    placeholder={'Link versi full'} 
                    touched={touched.link_versi_full}
                    value={values.link_versi_full}
                />
                <AppCategoryInput 
                    categories={karyaIlmiahType} 
                    error={errors.tipe}
                    label={'Tipe'} 
                    onSelect={handleSelectType}
                />
                <AppDocumentInput 
                    error={errors.file_preview}
                    onSelectFile={handleSelectFile}
                    label={'Pilih file preview'}
                /> 
                <AppButton 
                    onPress={handleSubmit} 
                    style={styles.btn} 
                    title={'Kirim'} 
                />
            </Screen>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30
    },
    btn: {
        marginVertical: 20
    }
});