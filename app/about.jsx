import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const about = () => {

    return (
        <ThemedView style={styles.container}>
            <ThemedText isTitle={true} style={[styles.title,]}>About Page</ThemedText>

        </ThemedView>
    )
}

export default about

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
    link:{
        marginVertical:20,  
        borderBottomWidth:1,
        borderBottomColor:'blue',
    }
})