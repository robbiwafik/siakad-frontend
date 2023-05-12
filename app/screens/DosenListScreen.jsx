import { StyleSheet, View } from 'react-native';
import colors from '../assets/colors';
import DosenCard from '../components/DosenCard';
import Screen from '../components/Screen';
import SearchBox from '../components/SearchBox';

export default function DosenListScreen() {
    return (
        <Screen>
            <View style={styles.searchBoxWrapper}>
                <SearchBox onSearch={console.log} />
            </View>
            <View style={styles.list}>
                <DosenCard name={'John Smith'} nip={'12345566'} source={require('../assets/images/empty-pp.png')} />
                <DosenCard name={'Jane Smith'} nip={'394394938'} source={require('../assets/images/empty-pp.png')} />
                <DosenCard name={'John Doe'} nip={'32423'} source={require('../assets/images/empty-pp.png')} />
                <DosenCard name={'Jane Doe'} nip={'23432432'} source={require('../assets/images/empty-pp.png')} />
                <DosenCard name={'John Smith'} nip={'12345566'} source={require('../assets/images/empty-pp.png')} />
                <DosenCard name={'Jane Smith'} nip={'394394938'} source={require('../assets/images/empty-pp.png')} />
                <DosenCard name={'John Doe'} nip={'32423'} source={require('../assets/images/empty-pp.png')} />
                <DosenCard name={'Jane Doe'} nip={'23432432'} source={require('../assets/images/empty-pp.png')} />
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
        justifyContent: 'center',
    }
});