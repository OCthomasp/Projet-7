import Carousel from '../components/Carousel'
const data = require('../data/logements.json')

const housing = data[0]

const Logement = () => {
    console.log(housing)

    return (
        <main>
            <Carousel key="001carousel" urlList={housing.pictures} />
            <section id="housing-info">
                <h1>{housing.title}</h1>
                <h2>{housing.location}</h2>
                <div className="tags">tags</div>
                <div className="host-info">{housing.host.name}</div>
                <div className="rating">rating</div>
            </section>
        </main>
    )
}

export default Logement
