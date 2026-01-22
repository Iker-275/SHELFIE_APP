import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Icon from '../assets/icon.png'
import {Link} from 'expo-router'

const Home= () => {
  return (
    <View style={styles.container}>
    <Image source={Icon} style={styles.img} />
      <Text style={[styles.title,{color:'purple'}]}>Home Page</Text>
      <Text style={{marginTop: 20,marginBottom: 20}}>Reading List</Text>
 
 <View style={styles.card}>
        <Text>Book Title 1</Text>
        <Text>Author 1</Text>

        </View>

        <Link style={styles.link} href="/about"> About Page</Link>
        <Link style={styles.link} href="/contact"> Contact Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    card:{
        width: '90%',
        height: 100,  
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }  ,
    img:{
        padding: 30,
        width: 100,
        height: 100,
        marginVertical: 3,
    },
    link:{
        marginVertical:20,  
        borderBottomWidth:1,
        borderBottomColor:'blue',
    }

})