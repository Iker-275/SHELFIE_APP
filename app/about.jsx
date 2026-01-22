import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Page</Text>
            <Link style={styles.link} href="/"> Home Page</Link>

        </View>
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