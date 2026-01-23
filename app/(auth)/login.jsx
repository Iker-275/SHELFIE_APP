import { StyleSheet,  } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const login = () => {
  return (
    <ThemedView>
    <Spacer height={"20%"} />
      <ThemedText isTitle={true}>Login to Your Account</ThemedText>
        <Spacer height={100} />
        <Link href="/register">
        
       <ThemedText style={{textAlign:'center'}}>Register</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
    
})