import arrowImg from '../assets/arrow.svg'

const Arrow = ({ direction, clickFunction }) => (
    <div className={`slide-arrow-${direction}`} onClick={() => clickFunction()}>
        <img src={arrowImg} alt="icone dropdown" />
    </div>
)

export default Arrow
