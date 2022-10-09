import { useNavigate } from 'react-router-dom'

const Card = ({ id, title, picture }) => {
    const navigate = useNavigate()
    const url = `/logement/${id}`
    return (
        <article className="card" onClick={() => navigate(url)}>
            <img className="card-img" src={picture} alt="Logement" />
            <h2 className="card-text">{title}</h2>
        </article>
    )
}

export default Card
