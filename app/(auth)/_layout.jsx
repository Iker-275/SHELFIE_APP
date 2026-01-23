import { StyleSheet, Text, View ,useColorScheme} from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../../constants/colors'
import { StatusBar } from 'expo-status-bar'


const _AuthLayout = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] ?? Colors.light;
    const titleColor = themeColors.title;

    return (
        <>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: themeColors.navBackground,
                },
                headerTintColor: titleColor,headerShown: true,
            }} >
                
            </Stack>
        </>

    )
}

export default _AuthLayout

const styles = StyleSheet.create({})