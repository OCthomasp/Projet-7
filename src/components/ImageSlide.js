const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
    }

    return <div className="image-slide" style={styles}></div>
}

export default ImageSlide
