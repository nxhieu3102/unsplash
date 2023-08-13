import React from "react";
import Photo from "./Photo";
import Masonry from "react-responsive-masonry";

const PhotoList = ({ list }) => {
    return (
        <Masonry columnsCount={3} gutter="20px">
            {list.map((photo, index) => (
                <div className="w-full" key={index}>
                    <Photo src={photo.urls.small} />
                </div>
            ))}
        </Masonry>
    );
}

export default PhotoList;
