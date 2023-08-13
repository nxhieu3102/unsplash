/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import APIService from "services/APIservice"
import BasePage from "pages/BasePage"

const Search = () => {
    const params = useParams()
    const _ = params.query

    const [query, setQuery] = useState(_)
    useEffect(() => {
        setQuery(_)
    }, [_])

    return (
        <div>
            <BasePage
                dependencies={[query]}
                fnc={APIService.searchPhotos}
                fncNext={APIService.searchPhotosNext}
                fncParam={query}
                isResults={true}
            />
        </div>
    )
}

export default Search