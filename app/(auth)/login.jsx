import { StyleSheet, Button,Text} from 'react-native'
import React,{useState} from 'react'
import { useUser } from '../../hooks/useState'
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
    const [errorMsg,setErrorMsg] = useState(null);

    const{user,login} = useUser();
 const  handleSubmit = async () => {
      setErrorMsg( null);


   try {
      await login(email, password);
      
    } catch (error) {
console.log("error msg",error.message);

      setErrorMsg(error.message);
      
    }
 console.log("state"+ errorMsg);

 }
  return (
    <ThemedView>
    <Spacer height={"20%"} />
      <ThemedText isTitle={true}>Login to Your Account</ThemedText>
        <Spacer height={100} />
 <ThemedTextInput style={{width:"80%",marginBottom:10}} placeholder="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} value={email} />
      

      <ThemedTextInput style={{width:"80%",marginBottom:10}} placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
       
       <Button title="Login" onPress={handleSubmit} />
       <Spacer height={10} />
       {errorMsg && <Text style={styles.error}>{errorMsg}</Text> }
       {/* <ThemedButton isLogin={true} onPress={handleSubmit}  /> */}
  
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
  },
  error:{
    color:'red',
    textAlign:'center',
  }
})