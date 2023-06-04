import { ScrollView, StyleSheet, View } from 'react-native';
import colors from '../assets/colors';
import CollapsibleCategoryMenu from '../components/CollapsibleCategoryMenu';
import JadwalMenu from '../components/JadwalMenu';
import Screen from '../components/Screen';

export default function JadwalScreen() {
  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={styles.scheduleWrapper}>
        <CollapsibleCategoryMenu title={'Senin'}>
          <JadwalMenu
            makul={'Analisa dan Perancangan Sistem Informasi'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
          <JadwalMenu
            makul={'Pemograman Terstruktur'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
        </CollapsibleCategoryMenu>
        <CollapsibleCategoryMenu title={'Selasa'}>
          <JadwalMenu
            makul={'Analisa dan Perancangan Sistem Informasi'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
          <JadwalMenu
            makul={'Pemograman Terstruktur'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
        </CollapsibleCategoryMenu>
        <CollapsibleCategoryMenu title={'Rabu'}>
          <JadwalMenu
            makul={'Analisa dan Perancangan Sistem Informasi'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
          <JadwalMenu
            makul={'Pemograman Terstruktur'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
        </CollapsibleCategoryMenu>
        <CollapsibleCategoryMenu title={'Kamis'}>
          <JadwalMenu
            makul={'Analisa dan Perancangan Sistem Informasi'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
          <JadwalMenu
            makul={'Pemograman Terstruktur'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
        </CollapsibleCategoryMenu>
        <CollapsibleCategoryMenu title={'Jumat'}>
          <JadwalMenu
            makul={'Analisa dan Perancangan Sistem Informasi'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
          <JadwalMenu
            makul={'Pemograman Terstruktur'}
            waktu={'09.00 - 12.00'}
            gedung={'Lab Terpadu'}
            ruangan={'3.1'}
          />
        </CollapsibleCategoryMenu>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scheduleWrapper: {
    backgroundColor: colors.background
  }
});
