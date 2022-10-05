import arrow from '../assets/dropdown.svg'

const Dropdown = () => {
    return (
        <div class="dd-container">
            <div class="dd-preview">
                <h1>Titre</h1>
                <img src={arrow} alt="icone dropdown" />
            </div>
            <div class="dd-hidden">
                <p class="dd-text">
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>
        </div>
    )
}
export default Dropdown
