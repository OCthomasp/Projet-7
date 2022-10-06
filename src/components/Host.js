const Host = ({ name, picture }) => {
    return (
        <div className="host">
            <p>{name}</p>
            <img src={picture} alt="Hôte" />
        </div>
    )
}
export default Host
