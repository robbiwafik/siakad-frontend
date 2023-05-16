import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../assets/colors';
import KaryaIlmiahMediaObject from '../components/KaryaIlmiahMediaObject';
import Screen from '../components/Screen';
import SearchBox from '../components/SearchBox';
import { useState } from 'react';
import NavigatorItem from '../components/NavigatorItem';

export default function KaryaIlmiahListScreen() {
    const [ selected, setSelected ] = useState('semua');

    return (
        <Screen>
            <View style={styles.searchBoxWrapper}>
                <SearchBox onSearch={console.log} />
                <View style={styles.navbar}>
                    <NavigatorItem 
                        title={'Semua'} 
                        onPress={() => setSelected('semua')} 
                        active={selected === 'semua'}
                    />
                    <NavigatorItem 
                        title={'Karya Ilmiah Anda'} 
                        onPress={() => setSelected('karya ilmiah anda')} 
                        active={selected === 'karya ilmiah anda'}
                    />
                </View>
                <View>
                    <KaryaIlmiahMediaObject 
                        title={'Rancang Bangun Sistem Informasi Pendataan Objek Lingkungan Kota Singkawang'}
                        type={'Tugas Akhir'}
                        releasedYear={'2021'}
                    />
                    <KaryaIlmiahMediaObject 
                        title={'Rancang Bangun Sistem Informasi Pendataan Objek Lingkungan Kota Singkawang'}
                        type={'Tugas Akhir'}
                        releasedYear={'2021'}
                    />
                    <KaryaIlmiahMediaObject 
                        title={'Rancang Bangun Sistem Informasi Pendataan Objek Lingkungan Kota Singkawang'}
                        type={'Tugas Akhir'}
                        releasedYear={'2021'}
                    />
                    <KaryaIlmiahMediaObject 
                        title={'Rancang Bangun Sistem Informasi Pendataan Objek Lingkungan Kota Singkawang'}
                        type={'Tugas Akhir'}
                        releasedYear={'2021'}
                    />
                    <KaryaIlmiahMediaObject 
                        title={'Rancang Bangun Sistem Informasi Pendataan Objek Lingkungan Kota Singkawang'}
                        type={'Tugas Akhir'}
                        releasedYear={'2021'}
                    />
                </View>
                <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                    <AntDesign name='plus' size={25} color={colors.white} />
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    searchBoxWrapper: {
        paddingHorizontal: 10
    },
    navbar: {
        borderBottomColor: colors.light,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    addBtn: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 30,
        bottom: 0,
        height: 60,
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        width: 60
    }
});