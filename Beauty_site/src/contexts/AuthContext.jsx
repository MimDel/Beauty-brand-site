import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"))

    const login = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{isLoggedIn, login, logout}}>
        {children}
    </AuthContext.Provider>
}