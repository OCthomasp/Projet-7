const Banner = ({ page, text }) => {
    const classContent = `bg bg-${page}`

    return <div className={classContent}>{text}</div>
}

export default Banner
