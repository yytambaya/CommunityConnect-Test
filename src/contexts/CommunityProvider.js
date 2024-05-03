import { createContext, useContext } from "react"
import { useState } from "react"

export const CommunityContext = createContext()

export const CommunityContextProvider = ({children}) => {
    const [community, setCommunity] = useState(null)

    return(
        <CommunityContext.Provider value={{community, setCommunity}} >
            {children}
        </CommunityContext.Provider>    
    )
}
export const useCommunityContext = () => useContext(CommunityContext);
