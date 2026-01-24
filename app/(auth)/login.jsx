import { StyleSheet, } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'
import ThemedButton from '../../components/ThemedButton'




const login = () => {
 const  handleSubmit = () => {
    console.log("Login button pressed");
  }
  return (
    <ThemedView>
    <Spacer height={"20%"} />
      <ThemedText isTitle={true}>Login to Your Account</ThemedText>
        <Spacer height={100} />

       <ThemedButton isLogin={true} onPress={handleSubmit}  />
  
       <Spacer height={10} />
        <Link href="/register">
        
       <ThemedText style={{textAlign:'center'}}>Register</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
  btn:{
    backgroundColor:Colors.primary,
    borderRadius:5,
    padding:10,
    marginHorizontal:20,
    
  },
  pressed:{
    opacity:0.8,
  }
})