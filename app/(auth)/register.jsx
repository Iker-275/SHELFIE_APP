import { StyleSheet, TextInput, TouchableWithoutFeedback,Keyboard } from 'react-native'
import React ,{useState}from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'


const register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    console.log("Register button pressed",email,password);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView>
      <Spacer height={"20%"} />
      <ThemedText isTitle={true}>Register for an Account</ThemedText>
      <Spacer height={100} />
      <ThemedTextInput style={{width:"80%",marginBottom:10}} placeholder="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} value={email} />
      

      <ThemedTextInput style={{width:"80%",marginBottom:10}} placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
       

      <ThemedButton onPress={handleSubmit} isLogin={false} />
      <Spacer height={10} />

      <Link href="/login">
        <ThemedText style={{ textAlign: 'center' }}>Login</ThemedText>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default register

const styles = StyleSheet.create({

})