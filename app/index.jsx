import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from '../assets/icon.png'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />

            <ThemedText isTitle={true} >Home Page</ThemedText>
            <Spacer height={5} />
            <ThemedText>Reading List</ThemedText>
            <Spacer height={5} />


            <ThemedCard >
                <ThemedText>Book Title 1</ThemedText>
                <ThemedText>Author 1</ThemedText>

            </ThemedCard>

            {/* <Link style={styles.link} href="/about"> About Page</Link>
        <Link style={styles.link} href="/contact"> Contact Page</Link> */}

            <Link style={styles.link} href="/login"> Login Page</Link>
            <Link style={styles.link} href="/register"> Register Page</Link>
        </ThemedView>
    )
}

export default Home

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
    card: {
        width: '90%',
        height: 100,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    img: {
        padding: 30,
        width: 100,
        height: 100,
        marginVertical: 3,
    },
    link: {
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    }

})