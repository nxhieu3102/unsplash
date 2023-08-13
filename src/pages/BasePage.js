/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PhotoList from "components/PhotoList";
import SkeletonLoadingImage from "components/SkeletonLoadingImage";

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
            if (isResults)
                setPhotos(data.results);
            else setPhotos(data);
        });
    };

    const fetchDataNext = () => {
        setIsLoading(true);
        setPhotos((prev) => [...prev, SkeletonLoadingImage, SkeletonLoadingImage, SkeletonLoadingImage, SkeletonLoadingImage, SkeletonLoadingImage, SkeletonLoadingImage])
        fncNext(fncParam).then((data) => {
            setIsLoading(false);
            if (isResults)
                setPhotos((prev) => {
                    const updatedPrev = prev.slice(0, prev.length - 6);
                    return [...updatedPrev, ...data.results];
                });
            else
                setPhotos((prev) => {
                    const updatedPrev = prev.slice(0, prev.length - 6);
                    return [...updatedPrev, ...data];
                });
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
