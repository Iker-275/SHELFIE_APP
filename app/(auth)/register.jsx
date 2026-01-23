import { StyleSheet,  } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const register= () => {
  return (
    <ThemedView>
    <Spacer height={"20%"} />
      <ThemedText isTitle={true}>Register for an Account</ThemedText>
        <Spacer height={100} />
        <Link href="/login">
        
       <ThemedText style={{textAlign:'center'}}>Login</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default register

const styles = StyleSheet.create({
    
})