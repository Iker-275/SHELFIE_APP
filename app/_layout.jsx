import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const _RootLayout = () => {
    return (
       
            <Stack screenOptions={{
                headerStyle:{
                    backgroundColor:"#ddd",
                },
                headerTintColor:'#333'
            }} >
                <Stack.Screen name="index" options={{title: 'Home Page'}} />
                <Stack.Screen name="about" options={{title: 'About Page'}}/>
                <Stack.Screen name="contact" options={{title: 'YOLO',headerShown: true,}}/>
                <Slot />
            </Stack>
            
        
    )
}

export default _RootLayout

const styles = StyleSheet.create({})