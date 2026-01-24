import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const profile = () => {
    return (
        <ThemedView>
            <ThemedText isTitle={true} style={styles.heading}>Your email</ThemedText>
            <Spacer />
            <ThemedText >Time to start reading..</ThemedText>
            <Spacer />
        </ThemedView>
    )
}

export default profile

const styles = StyleSheet.create({
    heading: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    heading: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})