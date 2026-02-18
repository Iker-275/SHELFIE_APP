import { createContext, useState } from "react";
import { account } from "../constants/appwrite";
import { ID } from "react-native-appwrite";
import { Try } from "expo-router/build/views/Try";

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
             
            setUser(response);
        }catch (error) {
            console.error("Login error:", error);
        }
    }
    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error) {
            console.error("Registration error:", error);
        }
    }

    async function logout() {

    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };