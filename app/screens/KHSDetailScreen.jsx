import { ScrollView, StyleSheet, View } from 'react-native';
import colors from '../assets/colors';
import AttributeBadge from '../components/AttributeBadge';
import MakulAttribute from '../components/MakulAttribute';

export default function KHSDetailScreen() {
  const items = [
    {
      title: '3.9',
      subTitle: 'IP Semester',
    },
    {
      title: '23',
      subTitle: 'Total SKS',
    },
  ];

  return (
      <ScrollView style={styles.screen}>
        <View style={styles.attributeBadgeWrapper}>
          <AttributeBadge items={items} />
        </View>
        <View style={styles.scores}>
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
          <MakulAttribute
            makul={'Analisa dan Perancangan Sistem Informasi'}
            sksCount={3}
            score={78}
            qualityLetter={'B'}
            qualityNumber={'3'}
          />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
  },
  attributeBadgeWrapper: {
    height:180,
    backgroundColor: colors.white,
    justifyContent: 'flex-end'
  },
  scores: {
    marginTop: 10,
  },
});
