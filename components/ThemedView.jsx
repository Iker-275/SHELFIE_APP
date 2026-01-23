import { StyleSheet, Text, View ,useColorScheme} from 'react-native'
import React from 'react'
import {Colors }from '../constants/colors'


const ThemedView = ({style,...props }) => {
  const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[{ backgroundColor: themeColors.background }, style]} {...props}/>
  )
}

export default ThemedView

const styles = StyleSheet.create({})