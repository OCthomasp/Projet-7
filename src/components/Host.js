const Host = ({ name, picture }) => {
    return (
        <div className="host">
            <h2>{name}</h2>
            <img src={picture} alt="photo de l'hôte" />
        </div>
    )
}
export default Host
