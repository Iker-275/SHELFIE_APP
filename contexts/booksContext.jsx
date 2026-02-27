import { createContext, use, useState } from "react";
import { database } from "../constants/appwrite";
import { ID, Permission,Role } from "react-native-appwrite";
import { useUser } from "../hooks/useState";


const DATABASE_ID = "69a145750034affbad1c";
const COLLECTION_ID = "books";
export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {user} = useUser();


    async function fetchBooks() {
        try {

        } catch (error) {
            console.log(error.message);

        }
    }

    async function fetchBookById(id) {
        try {
        } catch (error) {
            console.log(error.message);

        }
    }

    async function addBook(book) {
        try {
            const newBook = await database.createDocument(DATABASE_ID, COLLECTION_ID,ID.unique(),{...book,userId:user.$id},
        [
            Permission.read(Role.user(user.$id)),
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id)),
        ]
        );
        } catch (error) {
            console.log(error.message);

        }
    }

    async function deleteBook(id) {
        try {
        } catch (error) {
            console.log(error.message);
            
        }
    }

    return (
        <BooksContext.Provider value={{ books, setBooks, loading, setLoading, error, setError,
        fetchBooks,fetchBookById,addBook,deleteBook    }}>
            {children}
        </BooksContext.Provider>
    );
}