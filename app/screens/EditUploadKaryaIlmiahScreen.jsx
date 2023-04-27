import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import AppDocumentInput from '../components/AppDocumentInput';
import AppCategoryInput from '../components/AppCategoryInput';

// This array should be fetched from the backend to avoid un-persistence data,
// But the current backend version doesn't provide an API for this array,
// Communicate with the backend team and refactor this array in the future
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

export default function EditUploadKaryaIlmiahScreen() {

    // TODO: Refactor the SafeAreaView component
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <AppInput placeholder={'Judul'} />
                <AppInput placeholder={'Abstrak'} />
                <AppInput placeholder={'Link versi full'} />
                <AppCategoryInput 
                    categories={karyaIlmiahType} 
                    label={'Tipe'} 
                    onSelect={(category) => {console.log(category)}} 
                />
                <AppDocumentInput /> 
                <AppButton style={styles.btn} title={'Kirim'} />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 30
    },
    btn: {
        marginVertical: 20
    }
});