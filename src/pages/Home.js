import { useState, useEffect } from "react"
import APIService from "services/APIservice"
import PhotoList from "components/PhotoList"

const Home = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        APIService.getRandomPhotos().then((data) => {
            setPhotos(data)
        })
    }, [])

    return (
        <div>
            {photos && <PhotoList list={photos} />}
        </div>
    )
}

export default Home 