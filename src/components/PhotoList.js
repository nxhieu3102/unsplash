import React from "react";
import Photo from "./Photo";
import Masonry from "react-responsive-masonry";


function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


const PhotoList = ({ list }) => {
    const parentElement = getElementByXpath("/html/body/div[1]/div/div/div[2]/div/div");
    if (parentElement) {
        const childElements = parentElement.querySelectorAll('div');
        if (childElements.length > 0) {
            childElements.forEach(childElement => {
                childElement.style.gap = "20px"; 
            });
        } 
    } 

    return (
        <Masonry columnsCount={3} gutter="66px">
            {list.map((Item, index) => {
                return (
                    <div className="w-[400px]" key={index}>
                        {
                            Item.urls ?
                                <Photo
                                    src={Item.urls.small}
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
