import { StyleSheet, } from 'react-native'
import React,{useState} from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'




const login = () => {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 const  handleSubmit = () => {
    console.log("Login button pressed",email,password);
  }
  return (
    <ThemedView>
    <Spacer height={"20%"} />
      <ThemedText isTitle={true}>Login to Your Account</ThemedText>
        <Spacer height={100} />
 <ThemedTextInput style={{width:"80%",marginBottom:10}} placeholder="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} value={email} />
      

      <ThemedTextInput style={{width:"80%",marginBottom:10}} placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
       
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