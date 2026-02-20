import { createContext, useEffect, useState } from "react";
import { account } from "../constants/appwrite";
import { ID } from "react-native-appwrite";


const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const[authChecked,setAuthChecked] = useState(false)

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();

            setUser(response);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async function logout() {
        await account.deleteSession("current");
        setUser(null);
    }

    async function getInitialUser() {
        try {
            const response = await account.get();
            setUser(response);
        } catch (error) {
            setUser(null);
        }finally {      
            setAuthChecked(true)
        }
    }

    
        useEffect(() => {
            getInitialUser();
        }, []);

        return (
            <UserContext.Provider value={{ user, login, register, logout ,authChecked}}>
                {children}
            </UserContext.Provider>
        )
    }

    export { UserContext, UserProvider };