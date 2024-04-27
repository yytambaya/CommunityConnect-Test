import { createContext } from "react"
import { useState } from "react"

export const CommunityContext = createContext()

export const EventContextProvider = ({children}) => {
    const [community, setCommunity] = useState(JSON.parse(localStorage.getItem('community')))

    return(
        <CommunityContext.Provider value={{community, setCommunity}} >
            {children}
        </CommunityContext.Provider>    
    )
}