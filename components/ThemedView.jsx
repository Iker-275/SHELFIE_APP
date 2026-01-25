import { StyleSheet, Text, View ,useColorScheme,} from 'react-native'
import React from 'react'
import {Colors }from '../constants/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const ThemedView = ({style,safe=true,...props }) => {
  const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme] ?? Colors.light;

    if(!safe){
      return (
        <View style={[{ backgroundColor: themeColors.background }, style, styles.container]} {...props}/>
      )
    }
    const insets = useSafeAreaInsets();
  return (
    <View style={[
      { backgroundColor: themeColors.background ,
    paddingTop: insets.top,
    paddingBottom: insets.bottom}, 
    style, styles.container]} {...props}/>
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