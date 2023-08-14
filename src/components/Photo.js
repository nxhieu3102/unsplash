import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Photo = ({
    src,
    color,
    altDescription,
    width,
    height,
}) => {
    

    return (
        <div
            style={{
                "backgroundColor": color,
            }}>
            <LazyLoadImage
                src={src}
                alt={altDescription}
                effect="blur"
                width={400}
                height={400 * height / width - 5}
            />
        </div>
    )
}

export default Photo;