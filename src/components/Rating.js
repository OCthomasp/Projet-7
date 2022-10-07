import Star from '../components/Star'

const Rating = ({ score }) => {
    let score_array = Array(5).fill(false).fill(true, 0, score)

    return (
        <div className="rating-container">
            {score_array.map((isFull, index) =>
                isFull ? (
                    <Star key={`star_${index}`} isFull={true} />
                ) : (
                    <Star key={`star_${index}`} isFull={false} />
                )
            )}
        </div>
    )
}
export default Rating
