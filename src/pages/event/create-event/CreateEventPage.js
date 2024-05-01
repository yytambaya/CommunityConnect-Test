import { useState } from "react"
import CreateEvent from "./CreateEvent"
import EventPreview from "./EventsPreview"

const CreateEventPage = () => {
    const [page, setPage] = useState('CreateEvent')
    return(
        <>
            {page == "CreateEvent" ? <CreateEvent page={page} setPage={setPage}/> : <EventPreview />}
        </>
    )
}

export default CreateEventPage