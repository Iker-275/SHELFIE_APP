import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText isTitle={true} style={styles.title}>Contact Page</ThemedText>
      
    </ThemedView>
  )
}

export default contact

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