/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import APIService from "services/APIservice"
import PhotoList from "components/PhotoList"

const Search = () => {
    const params = useParams()
    const query = params.query
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        APIService.searchPhotos(query).then((data) => {
            setPhotos(data)
        })
    }, [])

    return (
        <div>
            {photos && <PhotoList list={photos} />}
        </div>
    )
}

export default Search