import arrow from '../assets/arrow.svg'
import { useState } from 'react'

const Collapse = ({ title, content }) => {
    const [collapsed, updateCollapse] = useState(true)

    const context =
        typeof content === typeof '' ? (
            <p className="dd-text">{content}</p>
        ) : (
            <ul>
                {content.map((element) => (
                    <li>{element}</li>
                ))}
            </ul>
        )

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
                {/* <p className="dd-text">{content}</p> */}
                {context}
            </div>
        </div>
    )
}
export default Collapse
