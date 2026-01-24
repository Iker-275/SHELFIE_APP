import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const create = () => {
  return (
    <ThemedView>
      <ThemedText style={styles.heading}>Add a New Book</ThemedText>
      <Spacer  />
    </ThemedView>
  )
}

export default create

const styles = StyleSheet.create({
    heading:{
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    },
     heading:{
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    }
})