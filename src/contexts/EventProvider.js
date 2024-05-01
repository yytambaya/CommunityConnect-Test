import { createContext, useContext } from "react"
import { useState } from "react"

export const EventContext = createContext()

export const EventContextProvider = ({children}) => {
    const [event, setEvent] = useState(null)

    return(
        <EventContext.Provider value={{event, setEvent}} >
            {children}
        </EventContext.Provider>    
    )
}

export const useEventContext = () => useContext(EventContext);