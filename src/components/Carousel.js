import Arrow from '../components/Arrow'
import ImageSlide from '../components/ImageSlide'
import { useState } from 'react'

const Carousel = ({ urlList }) => {
    const [urlIndex, setIndex] = useState(0)

    const previousSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? urlList.length - 1 : prevIndex - 1
        )
    }

    const nextSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === urlList.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div className="carousel">
            {urlList.length > 1 ? (
                <Arrow
                    key="left_arrow"
                    direction="left"
                    clickFunction={previousSlide}
                />
            ) : (
                <></>
            )}
            <ImageSlide url={urlList[urlIndex]} />
            {urlList.length > 1 ? (
                <Arrow
                    key="right_arrow"
                    direction="right"
                    clickFunction={nextSlide}
                />
            ) : (
                <></>
            )}
        </div>
    )
}

export default Carousel
