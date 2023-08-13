/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import APIService from "services/APIservice"
import PhotoList from "components/PhotoList"

const Topic = () => {
    const params = useParams()
    const topic = params.name
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        APIService.getPhotosByTopic(topic).then((data) => {
            setPhotos(data)
        })
    }, [topic])

    console.log(photos)
    return (
        <div>
            {photos && <PhotoList list={photos} />}
        </div>
    )
}

export default Topic