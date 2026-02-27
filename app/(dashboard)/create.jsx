import { StyleSheet, Text, Button, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import React, { useState } from 'react'
import { useUser } from '../../hooks/useState'
import Spacer from '../../components/Spacer'
import { Link, useRouter } from 'expo-router'
import { Colors } from '../../constants/colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useBooks } from '../../hooks/useBooks'

const create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { addBook } = useBooks();
  const router = useRouter();

  async function handleSubmit() {
    setErrorMsg(null);
    if (!title.trim() || !author.trim() || !description.trim()) {
      setErrorMsg("Please fill in all fields");
      return;
    }
    setLoading(true);
    await addBook({ title, author, description })
      .then(() => {
        router.replace('/books');
      })
      .catch(error => {
        setErrorMsg(error.message);
      })
      .finally(() => {
        setLoading(false);
        setTitle('');
        setAuthor('');
        setDescription('');
      });
    //reset form fields
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemedView>
        <ThemedText style={styles.heading}>Add a New Book</ThemedText>
        <Spacer height={100} />
        <ThemedTextInput style={{ width: "80%", marginBottom: 10 }} placeholder="Title" onChangeText={setTitle} value={title} />
        <ThemedTextInput style={{ width: "80%", marginBottom: 10 }} placeholder="Author" onChangeText={setAuthor} value={author} />
        <ThemedTextInput style={{ width: "80%", marginBottom: 10, ...styles.multiline }} placeholder="Description" onChangeText={setDescription} multiline={true} value={description} />

        <Button title={loading ? "Adding Book..." : "Add Book"} disabled={loading} loading={loading} onPress={handleSubmit} />
        <Spacer />
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default create

const styles = StyleSheet.create({
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 5,
    
  }
})