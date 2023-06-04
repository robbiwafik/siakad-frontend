import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';

import Screen from '../components/Screen';
import Attribute from '../components/Attribute';
import CollapsibleCategoryMenu from '../components/CollapsibleCategoryMenu';
import LabeledAttribute from '../components/LabeledAttribute';

export default function ProdiDetailScreen() {
    return (
        <Screen style={styles.screen}>
            <ImageBackground 
                source={require('../../assets/grid.png')} 
                resizeMode={'repeat'}
            >
                <View style={styles.mainAttributes}>
                    <Text style={styles.title}>Manajemen Informatika</Text>
                    <View style={styles.accreditation}>
                        <Text style={styles.accreditationWord}>B</Text>
                        <Text style={styles.accreditationLabel}>Akreditasi</Text>
                    </View>
                </View>    
            </ImageBackground>
            <View style={styles.labeledAttributes}>
                <LabeledAttribute 
                    label={"Kode:"} 
                    value={"57401"} 
                    iconName={"key"} 
                />
                <LabeledAttribute 
                    label={"Tanggal SK:"} 
                    value={"2008-07-08"} 
                    iconName={"calendar"} 
                    iconColor={"#198754"}
                />
                <LabeledAttribute 
                    label={"Nomor SK:"} 
                    value={"110/D/O/2008"} 
                    iconName={"folder-open"} 
                    iconColor={"#ffc107"}
                />
                <LabeledAttribute 
                    label={"Tahun Operasional:"} 
                    value={"2008"} 
                    iconName={"calendar-plus-o"} 
                    iconColor={"#dc3545"}
                />
                <LabeledAttribute 
                    label={"Program Pendidikan:"} 
                    value={"Diploma III"} 
                    iconName={"graduation-cap"} 
                    iconColor={"#0d6efd"}
                />
                <LabeledAttribute 
                    label={"Jurusan:"} 
                    value={"Manajemen Informatika"} 
                    iconName={"building"} 
                    iconColor={colors.secondaryDark}
                />
            </View>        
        </Screen>
    );
}

const styles = StyleSheet.create({
    accreditation: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: colors.primary,
        borderRadius: defaultStyles.borderRadius
    },
    accreditationWord: {
        fontSize: 50,
        color: colors.white
    },
    accreditationLabel: {
        color: colors.white
    },
    mainAttributes: {
        alignItems: 'center',
        marginVertical: 20
    },
    screen: {
        flex: 1
    },
    title: {
        fontSize: 25
    },
    labeledAttributes: {
        marginVertical: 20,
        paddingHorizontal: 5
    }
});