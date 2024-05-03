import { onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect } from "react"
import { useState } from "react"
import { logout } from "../api/auth/firebaseAuth"

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    /*useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                //alert("Signed in")
                setUser(user)
            }else{
                //alert("logged out")
                //logout()
            }
        })
    }, [])*/

    return(
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>    
    )
}

export const useUserContext = () => useContext(UserContext)