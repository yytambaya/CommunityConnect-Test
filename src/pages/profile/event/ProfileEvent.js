import { useState } from "react"
import Upcoming from "./Upcoming"
import MyEvents from "./MyEvents"
import Attended from "./Attended"

const ProfileEvent = () => {
    const [page, setPage] = useState("Upcoming")
    
    return(
        <>
            {page == "Upcoming" ? <Upcoming setPage={setPage} page={page}/> : page == "MyEvent" ? <MyEvents setPage={setPage} page={page}/>: <Attended setPage={setPage} page={page}/>}
        </>
    )
}

export default ProfileEvent