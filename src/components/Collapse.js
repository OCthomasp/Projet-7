import arrow from '../assets/arrow.svg'
import { useState } from 'react'

const Collapse = ({ title, content }) => {
    const [collapsed, updateCollapse] = useState(true)

    // Determine if we need to display text or a list
    const context =
        typeof content === typeof '' ? (
            <p className="collapse-text">{content}</p>
        ) : (
            <ul>
                {content.map((element) => (
                    <li>{element}</li>
                ))}
            </ul>
        )

    return (
        <div className="collapse-container">
            <div
                className="collapse-preview"
                onClick={() => updateCollapse(!collapsed)}
            >
                <h2>{title}</h2>
                <img
                    src={arrow}
                    alt="flèche"
                    className={collapsed ? 'down-arrow' : 'up-arrow'}
                />
            </div>
            <div className={collapsed ? 'collapse-hidden' : 'collapse-reveal'}>
                {context}
            </div>
        </div>
    )
}
export default Collapse
