const Card = ({ title, picture }) => {
    return (
        <article className="card" onClick={() => handleClick()}>
            <a href="#">
                <img
                    className="card-img"
                    src={picture}
                    alt="Photo du logement"
                />
                <div className="card-text">
                    <p>{title}</p>
                </div>
            </a>
        </article>
    )
}

const handleClick = () => {
    console.log('Reeeeee')
}

export default Card
