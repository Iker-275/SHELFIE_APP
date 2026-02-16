import { StyleSheet, Text, View ,TextInput,useColorScheme} from 'react-native'
import {Colors} from '../constants/colors'
import React from 'react'

const ThemedTextInput = ({style,...props}) => {
     const colorScheme = useColorScheme();
        const themeColors = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput style={[styles.input,
    {backgroundColor:themeColors.uiBackground,color:themeColors.text,padding:20,borderRadius:5},
    style]} {...props} />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})