import { useNavigate } from 'react-router-dom'

const Card = ({ id, title, picture }) => {
    const navigate = useNavigate()
    const url = `/logement/${id}`
    return (
        <article className="card" onClick={() => navigate(url)}>
            <img className="card-img" src={picture} alt="Logement" />
            <div className="card-text">{title}</div>
        </article>
    )
}

export default Card
