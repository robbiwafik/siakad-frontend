import { AntDesign } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../assets/colors';
import Attribute from '../components/Attribute';
import AttributeBadge from '../components/AttributeBadge';
import CircleButton from '../components/CircleButton';
import Screen from '../components/Screen';

export default function MahasiswaDetailScreen() {
    const items = [
        {
            id: 1,
            title: 3.1,
            subTitle: 'IP Kumulatif'
        },
        {
            id: 2,
            title: '1 A',
            subTitle: 'Kelas'
        }
    ]

    return (
        <Screen style={styles.screen}>
            <View style={styles.profileWrapper}>
                <Image source={require('../assets/images/pp-samples.jpg')} style={styles.photoProfile} />
                <View style={styles.profileIdentifier}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.id}>3202002xxxx</Text>
                </View>
                <TouchableOpacity style={styles.editBtn} activeOpacity={0.8}>
                    <AntDesign name='edit' size={20} color={colors.white} />
                </TouchableOpacity>
            </View>
            <AttributeBadge items={items} />
            <View style={styles.attributes}>
                <Attribute title={'Manajemen Informatika'} iconName={'graduation-cap'} iconColor={'#17a2b8'} />
                <Attribute title={'Tahun Angkatan 2020'} iconName={'calendar'} iconColor={'#ffc107'} />
                <Attribute title={'Kampung Dagang Timur no 56, RT2 RW1'} iconName={'home'} iconColor={'#28a745'} />
                <Attribute title={'johndoe@domain.com'} iconName={'envelope-o'} iconColor={'#DB4437'} />
            </View>
            <CircleButton style={styles.logOutBtn} iconName={'sign-out'} onPress={() => console.log('logged out')} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    profileWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    photoProfile: {
        borderColor: colors.background,
        borderRadius: 45,
        borderWidth: 1,
        height: 90,
        width: 90

    },
    profileIdentifier: {
        justifyContent: 'center',
        marginLeft: 20
    },
    name: {
        fontSize: 20,
        marginBottom: 4
    },
    id: {
        fontSize: 15,
        color: colors.dark
    },
    editBtn: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 10,
        bottom: 20,
        flexDirection: 'row',
        padding: 10,
        position: 'absolute',
        right: 35
    },
    attributes: {
        paddingHorizontal: 20
    },
    logOutBtn: {
        position: 'absolute',
        right: 20,
        width: 60,
        backgroundColor: colors.danger
    }
});