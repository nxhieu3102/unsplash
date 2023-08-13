/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import APIService from "services/APIservice"
import BasePage from "pages/BasePage"

const Topic = () => {
    const params = useParams()
    const _ = params.name

    const [topic, setTopic] = useState(_)
    useEffect(() => {
        setTopic(_)
    }, [_])

    return (
        <div>
            <BasePage
                dependencies={[topic]}
                promise={APIService.getPhotosByTopic(topic)}
            />
        </div>
    )
}

export default Topic