const Card = ({ title, picture }) => {
    return (
        <article className="card" onClick={() => handleClick()}>
            <img className="card-img" src={picture} alt="Photo du logement" />
            <div className="card-text">{title}</div>
        </article>
    )
}

const handleClick = () => {
    console.log('Reeeeee')
}

export default Card
