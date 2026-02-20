import {useColorScheme ,ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
import ThemedView from './ThemedView';


const ThemedLoader = () => {
     const colorScheme = useColorScheme();
        const themeColors = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator margin={10} size="large" color={themeColors.text} />
    </ThemedView>   
  )
}

export default ThemedLoader