import { StyleSheet, Text, View ,useColorScheme} from 'react-native'
import React from 'react'
import {Colors }from '../constants/colors'

const ThemedText = ({style,isTitle=false,...props}) => {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme] ?? Colors.light;
    const textColor = isTitle ? themeColors.title : themeColors.text;
    const titleStyle = isTitle ? styles.title : {};
  return (
    
      <Text style={[{color: textColor},style,titleStyle]} {...props} />
    
  )
}

export default ThemedText

const styles = StyleSheet.create({
   title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
})