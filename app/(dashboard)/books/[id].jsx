import { Button, StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import ThemedCard from '../../../components/ThemedCard'
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import { useBooks } from '../../../hooks/useBooks'
import ThemedLoader from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/colors'

const BookDetails = () => {
    const { id } = useLocalSearchParams();
    const[book, setBook] = useState(null);
    const { fetchBookById, deleteBook } = useBooks();
    const router = useRouter();
    useEffect(() => {
        async function fetchBook() {
            const book = await fetchBookById(id);
            setBook(book);
        }
        fetchBook();
    }, [id])

    async function handleDelete() {
        await deleteBook(id);
        setBook(null);
        router.replace("/books");
    }
    if (!book) {
        return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedLoader />
        </ThemedView>)
    }
    return (
        <ThemedView safe={true} style={styles.container}>
        <ThemedCard style={styles.card}>
            <ThemedText variant="title" style={styles.title}>{book?.title}</ThemedText>
            <ThemedText variant="subtitle" style={styles.author}>{book?.author}</ThemedText>
            <Spacer />
            <ThemedText style={styles.description}>{book?.description}</ThemedText>
        </ThemedCard>
        <Spacer />
        <Button style={styles.deleteButton} title="Delete Book" onPress={handleDelete} />
        </ThemedView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "stretch"
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    author:{
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10
    },
    description:{
        fontSize: 16,
        lineHeight: 24
    },
    card:{
        padding: 20,
        alignItems: "stretch",
        margin:20
    }   ,
    deleteButton:{
        marginTop: 40,
        
        backgroundColor: Colors.warning,
        alignSelf: "center",
    }
})