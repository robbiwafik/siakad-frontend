import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../assets/colors';
import defaultStyles from '../assets/defaultStyles';
import ModalCloseBtn from './ModalCloseBtn';
import ModalOption from './ModalOption';

export default function AppCategoryInput({ label, onSelect, categories=[] }) {
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ categoryLabel, setCategoryLabel ] = useState("");

    const handlePick = (category) => {
        setCategoryLabel(category.label);
        setModalVisible(false);

        onSelect(category);
    }

    return (
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View>
                <Modal visible={modalVisible} animationType='slide'>
                    <View style={styles.categoriesContainer}>
                        <View style={styles.closeBtn}>
                            <ModalCloseBtn onClose={() => setModalVisible(false)} />
                        </View>
                        {categories.map(category => (
                            <ModalOption 
                                active={category.label === categoryLabel}
                                key={category.code} 
                                label={category.label} 
                                onSelect={() => handlePick(category)}
                            />
                        ))}
                    </View>
                </Modal>
                <View style={styles.toggler}>
                    <Text style={styles.label}>{categoryLabel ? categoryLabel : label}</Text>
                    <Entypo name='chevron-thin-down' />            
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    closeBtn: {
        alignItems: 'center',
        marginBottom: 20,
        width: '100%'
    },
    label: {
        color: colors.dark,
        fontSize: defaultStyles.inputFontSize
    },
    toggler: {
        alignItems: 'center', 
        borderColor: colors.light,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: defaultStyles.borderWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 16
    }
});