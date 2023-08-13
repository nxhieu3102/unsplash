/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PhotoList from "components/PhotoList";

const BasePage = ({
    fnc,
    fncNext = null,
    fncParam = null,
    dependencies = [null]
}) => {

    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        fnc(fncParam).then((data) => {
            setPhotos(data);
            setIsLoading(false);
        });
    };

    const fetchDataNext = () => {
        setIsLoading(true);
        fncNext(fncParam).then((data) => {
            setPhotos((prev) => [...prev, ...data]);
            setIsLoading(false);
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
