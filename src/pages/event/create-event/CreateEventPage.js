import { useState } from "react"
import CreateEvent from "./CreateEvent"
import EventPreview from "./EventsPreview"
import EditEvent from "./EditEvent"

const CreateEventPage = () => {
    const [page, setPage] = useState('CreateEvent')
    return(
        <>
            {page == "CreateEvent" ? <CreateEvent page={page} setPage={setPage}/> : page == "EditEvent" ? <EditEvent setPage={setPage} page={page}/> :<EventPreview setPage={setPage} page={page}/>}
        </>
    )
}

export default CreateEventPage