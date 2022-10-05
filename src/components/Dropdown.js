import arrow from '../assets/dropdown.svg'
import { useState } from 'react'

const Dropdown = () => {
    const [collapsed, updateCollapse] = useState(true)

    return (
        <div className="dd-container">
            <div
                className="dd-preview"
                onClick={() => updateCollapse(!collapsed)}
            >
                <h2>Titre</h2>
                <img src={arrow} alt="icone dropdown" />
            </div>
            <div className="dd-hidden">
                <p className="dd-text">
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>
        </div>
    )
}
export default Dropdown
