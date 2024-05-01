import { createContext } from "react"
import { useState } from "react"

export const EventContext = createContext()

export const EventContextProvider = ({children}) => {
    const [event, setEvent] = useState({a:1})

    return(
        <EventContext.Provider value={{event, setEvent}} >
            {children}
        </EventContext.Provider>    
    )
}