import { createContext, use, useEffect, useState } from "react";
import { database,client} from "../constants/appwrite";
import { ID, Permission,Query,Role } from "react-native-appwrite";
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
       const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("userId", user.$id),
       
       ]);
       setBooks(response.documents);
            // console.log("Books fetched:", response.documents);

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
       // fetchBooks();
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

    useEffect(() => {
        console.log("1");
        
        let unsubscribe;
        console.log("2");
       
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;
        console.log("3");

        if (user) {
            fetchBooks();
            unsubscribe = client.subscribe( channel,(response) => {
                

                const { payload, events } = response;
        console.log("4");

        console.log("5");

                if (events[0].includes("create")) {
                    setBooks((prevBooks) => [...prevBooks, payload]);
                } })
        console.log("6");

            // unsubscribe = client.subscribe(channel,(response) => {
            //     const { payload,events} = response 
            //     if(events[0].includes("Create")){
            //         setBooks(prevBooks => [...prevBooks, payload]);
            //     }
               
            // });
        } else {
            setBooks([]);
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [user]);

    return (
        <BooksContext.Provider value={{ books, setBooks, loading, setLoading, error, setError,
        fetchBooks,fetchBookById,addBook,deleteBook    }}>
            {children}
        </BooksContext.Provider>
    );
}