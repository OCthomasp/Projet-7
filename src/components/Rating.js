import star from '../assets/star.svg'

const Rating = ({ score }) => {
    let score_array = Array(5).fill(false).fill(true, 0, score)

    const fullStar = <img src={star} alt="étoile remplie" />
    const emptyStar = (
        <img src={star} alt="étoile vide" className="empty-star" />
    )

    return (
        <div className="rating-container">
            {score_array.map((isFull) => (isFull ? fullStar : emptyStar))}
        </div>
    )
}
export default Rating
