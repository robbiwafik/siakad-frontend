import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../assets/colors';
import CollapsibleCategoryMenu from '../components/CollapsibleCategoryMenu';
import JadwalMenu from '../components/JadwalMenu';
import Screen from '../components/Screen';

export default function DosenDetailScreen() {
    return (
        <Screen style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.profileWrapper}>
                    <Image source={require('../assets/images/empty-pp.png')} style={styles.photoProfile} />
                    <View style={styles.profileIdentifier}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.id}>3202002xxxx</Text>
                    </View>
                </View>
                <View style={styles.attributeCard}>
                    <View style={styles.attributeCardItem}>
                        <FontAwesome name='graduation-cap' size={30} color={colors.secondary} />
                        <Text style={styles.attributeCardItemTitle}>S.Kom., M.Kom.</Text>
                    </View>
                    <View style={styles.attributeCardItem}>
                        <FontAwesome name='institution' size={30} color={colors.secondary} />
                        <Text style={styles.attributeCardItemTitle}>Manajemen Informatika</Text>
                    </View>
                    <View style={styles.attributeCardItem}>
                        <FontAwesome name='phone' size={30} color={colors.secondary} />
                        <Text style={styles.attributeCardItemTitle}>+62 89234xxxx</Text>
                    </View>
                    <View style={styles.attributeCardItem}>
                        <FontAwesome name='envelope' size={30} color={colors.secondary} />
                        <Text style={styles.attributeCardItemTitle}>johndoe@domain.com</Text>
                    </View>
                </View>
                <View style={styles.schedule}>
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
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.background,
        flex: 1
    },
    profileWrapper: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.background
    },
    photoProfile: {
        borderColor: colors.background,
        borderRadius: 60,
        borderWidth: 1,
        height: 120,
        width: 120

    },
    profileIdentifier: {
        marginTop: 10
    },
    name: {
        fontSize: 20,
        marginBottom: 4
    },
    id: {
        fontSize: 15,
        color: colors.dark
    },
    attributeCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: colors.white,
        marginVertical: 2
    },
    attributeCardItem: {
        alignItems: 'center',
        padding: 10,
        width: 150
    },
    attributeCardItemTitle: {
        marginTop: 10,
        textAlign: 'center'
    },
    schedule: {
        borderBottomWidth: 1,
        borderBottomColor: colors.background,
    }
});