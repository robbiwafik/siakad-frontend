import { useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, View } from 'react-native';

import SearchBox from '../components/SearchBox';

import colors from '../assets/colors';
import pemberitahuanData from '../assets/dummy/pemberitahuan.json';
import PemberitahuanCard from '../components/PemberitahuanCard';

export default function PemberitahuanListScreen() {
    const [ pemberitahuanList, setPemberitahuanList ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState("");

    useEffect(() => {
        setPemberitahuanList(pemberitahuanData);
    }, []);

    const handleSearch = (searchQuery) => {
        setSearchQuery(searchQuery.toLowerCase());
    }

    const filteredData = pemberitahuanList.filter(({ judul, sub_judul }) => (
        judul.toLowerCase().includes(searchQuery) || 
        sub_judul.toLowerCase().includes(searchQuery)
    ))

    console.log(filteredData)

    return (
        <View style={styles.screen}>
            <View style={styles.searchBoxContainer}>
                <SearchBox onSearch={handleSearch} />
            </View>
            <View style={styles.listContainer}>
                {filteredData.length !== 0 ?
                    <FlatList 
                        data={filteredData}
                        renderItem={({ item }) => (
                            <PemberitahuanCard 
                                title={item.judul} 
                                subTitle={item.sub_judul} 
                                // source={{
                                //     uri: "https://picsum.photos/500/300"
                                // }}
                                source={require('../assets/images/sample-pemberitahuan1.jpg')}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                    :
                    <View>
                        <Image source={require('../assets/images/notfound.png')} style={{ width: 200, height: 200 }} />
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#f8f5f5",
        flex: 1
    },
    searchBoxContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});