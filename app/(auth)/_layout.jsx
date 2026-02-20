import { StyleSheet, Text, View ,useColorScheme} from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../../constants/colors'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '../../hooks/useState'
import GuestOnly from '../../components/auth/GuestOnly'


const _AuthLayout = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] ?? Colors.light;
    const titleColor = themeColors.title;
    const {user} = useUser()
  console.log("Current user in AuthLayout:", user);
    return (
        <GuestOnly>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: themeColors.navBackground,
                },
                headerTintColor: titleColor,headerShown: true,
            }} >
                
            </Stack>
        </GuestOnly>

    )
}

export default _AuthLayout

const styles = StyleSheet.create({})