import { StyleSheet, Text, View ,FlatList,Pressable} from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useBooks } from '../../hooks/useBooks'
import { Colors } from '../../constants/colors'
import ThemedCard from '../../components/ThemedCard'
import { useRouter } from 'expo-router'



const books = () => {
  const { books } = useBooks();

  const router = useRouter(); 
  return (
     <ThemedView>
      <ThemedText style={styles.heading}>Your Reading List</ThemedText>
      <Spacer  /> 
      <FlatList data={books} keyExtractor={(item) => item.$id} contentContainerStyle={styles.list} renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
        <ThemedCard style={styles.card}>
          <ThemedText style={{ fontSize: 16, fontWeight: 'bold', color: Colors.primary }}>{item.title}</ThemedText>  
          <ThemedText style={{ fontStyle: 'italic', marginBottom: 5 }}>{item.author}</ThemedText>
          <ThemedText>{item.description}</ThemedText>
         
        </ThemedCard>
          </Pressable>  

      )} />
    </ThemedView>
  )
}

export default books

const styles = StyleSheet.create({
    container:{
        alignItems:'stretch',
       // justifyContent:'center',
        flex:1,
    },
     heading:{
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    },
    list:{
      marginTop:40,
    },
    card:{
      width:"90%",
      padding:10,
      paddingLeft:15,
      borderLeftColor:Colors.primary,
      borderLeftWidth:5,
      marginHorizontal:"5%",
      marginVertical:10,
    }
})