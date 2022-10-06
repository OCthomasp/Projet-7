import { useNavigate } from 'react-router-dom'

const Card = ({ title, picture }) => {
    const navigate = useNavigate()
    return (
        <article className="card" onClick={() => navigate('/logement')}>
            <img className="card-img" src={picture} alt="Logement" />
            <div className="card-text">{title}</div>
        </article>
    )
}

export default Card
