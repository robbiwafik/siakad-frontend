import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors';
import Attribute from '../components/Attribute';
import CollapsibleCategoryMenu from '../components/CollapsibleCategoryMenu';
import LabeledAttribute from '../components/LabeledAttribute';
import MenuOption from '../components/MenuOption';
import Screen from '../components/Screen';
import { FontAwesome } from '@expo/vector-icons';
import TransparentAttribute from '../components/TransparentAttribute';
import MediaObject from '../components/MediaObject';
import Card from '../components/Card';
import defaultStyles from '../assets/defaultStyles';
import CircleButton from '../components/CircleButton';

export default function KaryaIlmiahDetailScreen() {
    return (
        <Screen style={styles.screen}>
            <ScrollView>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>Rancang Bangun Sistem Informasi Pendataan Objek Lingkungan Kota Singkawang Berbasis Web</Text>
                    </View>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.thumbnail} source={require('../assets/images/ki-samples.jpg')} />
                    </View>
                    <View style={styles.attributeWrapper}>
                        <CollapsibleCategoryMenu title={'Abstrak'}>
                            <View style={styles.abstractWrapper}>
                                <Text style={styles.abstract}>{"    "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ullam, quibusdam at harum eveniet voluptate minus ea facere illo tempora in inventore quis sapiente quasi nulla tenetur nobis ipsum eos hic provident. Rerum perferendis dolor exercitationem voluptates, doloribus at similique modi velit quis soluta ducimus ut voluptatibus temporibus veritatis quod!</Text>
                            </View>
                        </CollapsibleCategoryMenu>
                        <CollapsibleCategoryMenu title={'Tanggal Terbit'}>
                            <TransparentAttribute label={"2002-07-21"} iconName={'calendar'} iconColor={colors.primary} />
                        </CollapsibleCategoryMenu>
                        <CollapsibleCategoryMenu title={'Tipe'}>
                            <TransparentAttribute label={'Laporan Magang'} iconName={'book'} iconColor={colors.secondary} />
                        </CollapsibleCategoryMenu>
                        <CollapsibleCategoryMenu title={'Program Studi'}>
                            <TransparentAttribute label={'Manejemen Informatika'} iconName={'building'} iconColor={colors.secondary} />
                        </CollapsibleCategoryMenu>
                    </View>
                    <View style={styles.profile}>
                        <MediaObject 
                            imageSource={require('../assets/images/pp-samples.jpg')}
                            title={'John Doe Smith'} 
                            subTitle={'3292929xxxx'} 
                        />
                    </View>
            </ScrollView>
            <CircleButton style={styles.previewFileBtn} iconName={'file-powerpoint-o'} />
            <CircleButton style={styles.linkBtn} iconName={'file-text-o'} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white
    },
    titleWrapper: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    title: {
        textAlign: 'center',
        fontSize: 20
    },
    imageWrapper: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    attributeWrapper: {
        paddingVertical: 10,
        backgroundColor: colors.background,
    },
    abstract: {
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'justify'
    },
    abstractWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    profile: {
        backgroundColor: colors.white,
        padding: 20,
        marginVertical: 15,
    },
    thumbnail: {
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        height: 400,
        width: 280,
        marginTop: 20
    },
    linkBtn: {
        position: 'absolute',
        right: 20,
        bottom: 40,     
    },
    previewFileBtn: {
        position: 'absolute',
        right: 20,
        bottom: 120,
        backgroundColor: colors.secondary
    }
});