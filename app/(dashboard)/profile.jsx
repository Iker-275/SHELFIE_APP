import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useState'
import ThemedLoader from '../../components/ThemedLoader'


const profile = () => {
    const { logout,user } = useUser()
    return (
        <ThemedView>
            <ThemedText isTitle={true} style={styles.heading}>{user?.email} </ThemedText>
            <Spacer />
            <ThemedText >Time to start reading..</ThemedText>
            <Spacer height={30} />
             
            <Button title='Logout' onPress={logout} />
          
            
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