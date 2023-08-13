import React from "react";
import Photo from "./Photo";
import Masonry from "react-responsive-masonry";

const PhotoList = ({ list }) => {
    return (
        <Masonry columnsCount={3} gutter="20px">
            {list.map((Item, index) => {
                console.log(Item)
                return (
                    <div className="w-full" key={index}>
                        {
                            Item.urls ?
                                <Photo
                                    src={Item.urls.raw}
                                    width={Item.width}
                                    height={Item.height}
                                    altDescription={Item.alt_description}
                                    color={Item.color}
                                />
                                : <Item />
                        }

                    </div>
                )
            })}
        </Masonry>
    );
}

export default PhotoList;
