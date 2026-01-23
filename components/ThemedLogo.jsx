import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react'
import Icon from '../assets/icon.png';
import Favicon from '../assets/favicon.png';
import { Colors } from '../constants/colors'

const ThemedLogo = ({style,props}) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'light' ? Icon : Favicon;
    return (
        <Image source={logo} style={[styles.img,style ]} {...props} />

    )
}

export default ThemedLogo

const styles = StyleSheet.create({
    img: {
        padding: 30,
        width: 100,
        height: 100,
        marginVertical: 3,
    },
})