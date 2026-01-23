import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedCard = ({ style ,...props}) => {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme] ?? Colors.light;

    return (
        <View style={[styles.card, { backgroundColor: themeColors.uiBackground },style]} {...props} >
            
        </View>
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 100,
        padding: 10,
        borderRadius: 10,
       
    },
})