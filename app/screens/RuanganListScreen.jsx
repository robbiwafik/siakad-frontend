import { StyleSheet, View } from 'react-native';

import colors from '../assets/colors';
import RuanganCard from '../components/RuanganCard';
import Screen from '../components/Screen';
import SearchBox from '../components/SearchBox';

export default function RuanganListScreen() {
    return (
        <Screen>
            <View style={styles.searchBoxWrapper}>
                <SearchBox onSearch={console.log} />
            </View>
            <View style={styles.list}>
                <RuanganCard no={'2.1'} />
                <RuanganCard no={'2.2'} />
                <RuanganCard no={'2.3'} />
                <RuanganCard no={'2.4'} />
                <RuanganCard no={'1.2'} />
                <RuanganCard no={'1.3'} />
                <RuanganCard no={'1.4'} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    searchBoxWrapper: {
        paddingHorizontal: 10
    },
    list: {
        backgroundColor: colors.background,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});