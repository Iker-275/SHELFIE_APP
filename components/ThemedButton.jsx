import { StyleSheet, Pressable,Text} from 'react-native'
import React from 'react'
import {Colors} from '../constants/colors'

const ThemedButton = (style,...props) => {
    const textBtn = props.isLogin == true ? 'Login' : 'Register';

    
    return (
        <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}  {...props} > 
         <Text style={{color:'white', textAlign:'center'}}>{textBtn}</Text>
            </Pressable>
        
    )
}

export default ThemedButton

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