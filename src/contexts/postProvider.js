import { createContext } from "react"
import { useState } from "react"

export const PostContext = createContext()

export const PostContextProvider = ({children}) => {
    const [post, setPost] = useState(JSON.parse(localStorage.getItem('post')))

    return(
        <PostContext.Provider value={{post, setPost}} >
            {children}
        </PostContext.Provider>    
    )
}