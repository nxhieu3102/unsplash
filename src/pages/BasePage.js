/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PhotoList from "components/PhotoList";

const BasePage = ({
    fnc,
    fncNext = null,
    fncParam = null,
    isResults = false,
    dependencies = [null]
}) => {

    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        fnc(fncParam).then((data) => {
            setIsLoading(false);
            if(isResults)
                setPhotos(data.results);
            else setPhotos(data);
        });
    };

    const fetchDataNext = () => {
        setIsLoading(true);
        fncNext(fncParam).then((data) => {
            setIsLoading(false);
            if(isResults)
                setPhotos((prev) => [...prev, ...data.results]);
            else 
                setPhotos((prev) => [...prev, ...data]);
        });
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && !isLoading) {
            fetchDataNext();
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, dependencies);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isLoading]);

    return (
        <div>
            {photos && <PhotoList list={photos} />}
        </div>
    );
};

export default BasePage;
