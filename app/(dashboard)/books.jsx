import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'


const books = () => {
  return (
     <ThemedView>
      <ThemedText style={styles.heading}>Your Reading List</ThemedText>
      <Spacer  />
    </ThemedView>
  )
}

export default books

const styles = StyleSheet.create({
    container:{
        alignItems:'stretch',
        justifyContent:'center',
        flex:1,
    },
     heading:{
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    }
})