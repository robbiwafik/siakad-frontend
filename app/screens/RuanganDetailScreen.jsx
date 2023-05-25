import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';
import CollapsibleCategoryMenu from '../components/CollapsibleCategoryMenu';
import JadwalMenu from '../components/JadwalMenu';
import Screen from '../components/Screen';

export default function RuanganDetailsScreen() {
    return (
        <Screen style={styles.screen}>
            <ScrollView>
                <View style={styles.attributes}>
                    <Text style={styles.ruanganTitle}>3.1</Text>
                    <View style={styles.statusRuangan}>
                        <FontAwesome 
                            color={"green"} 
                            name='circle' 
                            size={10} 
                            style={styles.statusIndicator} 
                        />
                        <Text>Tersedia</Text>
                    </View>
                </View>
                <View style={styles.schedules}>
                    <CollapsibleCategoryMenu title={'Senin'}>
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                    </CollapsibleCategoryMenu>
                    <CollapsibleCategoryMenu title={'Selasa'}>
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                    </CollapsibleCategoryMenu>
                    <CollapsibleCategoryMenu title={'Rabu'}>
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                    </CollapsibleCategoryMenu>
                    <CollapsibleCategoryMenu title={'Kamis'}>
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                    </CollapsibleCategoryMenu>
                    <CollapsibleCategoryMenu title={'Jumat'}>
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                        <JadwalMenu makul={'Sistem Informasi'} gedung={'Lab Terpadu'} ruangan={'3.1'} waktu={'10.00'} />
                    </CollapsibleCategoryMenu>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addAduanBtn}>
                <Text style={styles.addAduanBtnTitle}>Tambah Aduan Ruangan</Text>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    attributes: {
        alignItems: 'center',
        marginVertical: 30
    },
    addAduanBtn: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderRadius: defaultStyles.borderRadius,
        bottom: 30,
        padding: 15,
        position: 'absolute'
    },
    addAduanBtnTitle: {
        color: colors.white,
        textAlign: 'center'
    },
    ruanganTitle: {
        fontSize: 80
    },
    schedules: {
        backgroundColor: colors.background
    },
    screen: {
        flex: 1,
        paddingBottom: 20
    },
    statusIndicator: {
        paddingRight: 10
    },
    statusRuangan: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 20
    }
});