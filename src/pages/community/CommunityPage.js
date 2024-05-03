import { useState } from "react"
import CommunityList from "./CommunityList"
import CommunityView from "./CommunityView"

const CommunityPage = () => {
    const [page, setPage] = useState('CommunityList')
    return(
        <>
            {page == "CommunityList" ? <CommunityList page={page} setPage={setPage}/> : <CommunityView setPage={setPage} page={page}/> }
        </>
    )
}

export default CommunityPage