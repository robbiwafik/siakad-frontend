import { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../assets/colors';

export default function CollapsibleCategoryMenu({ children, title }) {
    const [ showContent, setShowContent ] = useState(false);
    const [ fadeAnim, setFadeAnim ] = useState(new Animated.Value(0));

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start()
    }

    const handleShowContent = () => {
        if (!showContent)
            fadeIn()
        else
            fadeOut();
        
        setShowContent(!showContent);
    }

    return (
        <TouchableWithoutFeedback onPress={handleShowContent}>
            <View style={styles.container}>
                <View style={styles.collapsible}>
                    <Text style={styles.title}>{title}</Text>
                    <Entypo 
                        color={colors.light} 
                        name='chevron-right' 
                        size={20} 
                        style={showContent && styles.chevron} 
                    />
                </View>
                <Animated.View 
                    style={showContent ? [styles.content, {opacity: fadeAnim}] : {display: 'none', opacity: fadeAnim}}
                >
                    {children}
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    chevron: {
        transform: [{rotate: '90deg'}]
    },
    container: {
        marginVertical: 1,
        width: '100%'
    },
    collapsible: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        width: '100%'
    },
    content: {
        // borderBottomWidth: 0.5,
        // borderColor: colors.dark,
        // borderTopWidth: 0.5
    },
    title: {
        color: colors.dark,
        fontSize: 16
    }
});