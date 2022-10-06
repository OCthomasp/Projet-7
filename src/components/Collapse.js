import arrow from '../assets/arrow.svg'
import { useState } from 'react'

const Collapse = ({ title, text }) => {
    const [collapsed, updateCollapse] = useState(true)

    return (
        <div className="dd-container">
            <div
                className="dd-preview"
                onClick={() => updateCollapse(!collapsed)}
            >
                <h2>{title}</h2>
                <img src={arrow} alt="icone dropdown" />
            </div>
            <div className="dd-hidden">
                <p className="dd-text">{text}</p>
            </div>
        </div>
    )
}
export default Collapse
