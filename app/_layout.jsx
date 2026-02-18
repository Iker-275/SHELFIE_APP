import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'

const _RootLayout = () => {
    const colorScheme = useColorScheme();
    const themeColors = Colors[colorScheme] ?? Colors.light;
    const titleColor = themeColors.title;

    return (
        <UserProvider>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: themeColors.navBackground,
                },
                headerTintColor: '#333'
            }} >
                <Stack.Screen name="index" options={{ title: 'Home Page', headerTintColor: titleColor }} />
                <Stack.Screen name="about" options={{ title: 'About Page', headerTintColor: titleColor }} />
                <Stack.Screen name="contact" options={{ title: 'YOLO', headerTintColor: titleColor, headerShown: true, }} />
                <Stack.Screen name="(auth)" options={{  headerTintColor: titleColor, headerShown: false, }} />
                <Stack.Screen name="(dashboard)" options={{ headerTintColor: titleColor, headerShown: false, }} />

                {/* <Stack.Screen name="login" options={{ title: 'Login', headerTintColor: titleColor, headerShown: true, }} />
                <Stack.Screen name="register" options={{ title: 'Register', headerTintColor: titleColor, headerShown: true, }} /> */}
                
            </Stack>
        </UserProvider>

    )
}

export default _RootLayout

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})