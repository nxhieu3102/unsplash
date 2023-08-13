const Photo = ({
    src,
    color,
    altDescription
}) => {
    return (
        <div
            style={{
                "backgroundColor": color,
            }}>
            <img
                src={src}
                alt={altDescription} />
        </div>
    )
}

export default Photo;