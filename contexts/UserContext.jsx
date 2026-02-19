import { createContext, useState } from "react";
import { account } from "../constants/appwrite";
import { ID } from "react-native-appwrite";


const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
             
            setUser(response);
        }catch (error) {
            throw new Error(error.message);
        }
    }
    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error) {
            throw new Error( error.message);
        }
    }

    async function logout() {
 await account.deleteSession("current");
 setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };