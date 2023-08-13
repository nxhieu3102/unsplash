/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import APIService from "services/APIservice"
import PhotoList from "components/PhotoList"

const Collection = () => {
    const params = useParams()
    const collection = params.name
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        APIService.getPhotosByCollection(collection).then((data) => {
            setPhotos(data)
        })
    }, [])

    return (
        <div>
            {photos && <PhotoList list={photos} />}
        </div>
    )
}

export default Collection