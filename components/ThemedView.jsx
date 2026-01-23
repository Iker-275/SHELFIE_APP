import { StyleSheet, Text, View ,useColorScheme} from 'react-native'
import React from 'react'
import {Colors }from '../constants/colors'


const ThemedView = ({style,...props }) => {
  const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[{ backgroundColor: themeColors.background }, style, styles.container]} {...props}/>
  )
}

export default ThemedView

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})