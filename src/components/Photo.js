const Photo = ({
    src,
    color,
    altDescription
}) => {
    return (
        <div className="imageWrapper"
            style={{
                "backgroundColor": color,
            }}>
            <img
                className="image image-fullsize"
                src={src}
                alt={altDescription} />
        </div>
    )
}

export default Photo;