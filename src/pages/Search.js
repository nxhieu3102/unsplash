/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import APIService from "services/APIservice"
import BasePage from "pages/BasePage"

const Search = () => {
    const params = useParams()
    const _ = params.name

    const [query, setQuery] = useState(_)
    useEffect(() => {
        setQuery(_)
    }, [_])

    return (
        <div>
            <BasePage
                dependencies={[query]}
                promise={APIService.searchPhotos(query)}
            />
        </div>
    )
}

export default Search