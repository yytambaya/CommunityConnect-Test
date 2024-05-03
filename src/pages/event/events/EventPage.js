import { useState } from "react"
import Events from "./Events"
import SingleEvent from "./SingleEvent"

const EventPage = () => {
    const [page, setPage] = useState("Events")
    return(
        <>
            {page == "Events" ?  <Events setPage={setPage} page={page}/> : <SingleEvent setPage={setPage} page={page}/>}
        </>
    )
}

export default EventPage