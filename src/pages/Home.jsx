import Banner from '../components/Banner'
import Card from '../components/Card'
import '../styles/home.css'
const data = require('../data/logements.json')

const Home = () => {
    return (
        <main>
            <Banner
                key="home_banner"
                page="home"
                text="Chez vous, partout et ailleurs"
            />
            <section id="housing">
                <h1 className="visually-hidden">Appartements en location</h1>
                {data.map((housing, index) => (
                    <Card
                        key={`card_${housing.id}_${index}`}
                        id={housing.id}
                        title={housing.title}
                        picture={housing.cover}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home
