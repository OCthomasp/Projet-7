import star from '../assets/star.svg'

const Star = ({ isFull }) => {
    return isFull ? (
        <img src={star} alt="étoile remplie" />
    ) : (
        <img src={star} alt="étoile vide" className="empty-star" />
    )
}
export default Star
