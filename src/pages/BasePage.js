/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PhotoList from "components/PhotoList";

const BasePage = ({
    promise,
    dependencies = [null]
}) => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        promise.then((data) => {
            setPhotos(data)
        })
    }, dependencies)


    return (
        <div>
            {photos && <PhotoList list={photos} />}
        </div>
    )
}

export default BasePage;