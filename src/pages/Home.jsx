import Banner from '../components/Banner'
import Card from '../components/Card'
import '../styles/home.css'
const data = require('../data/logements.json')

// const data = JSON.parse(dataJSON)

const Home = () => {
    return (
        <main>
            <Banner
                key="000banner"
                page="home"
                text="Chez vous, partout et ailleurs"
            />
            <section id="housing">
                {data.map((housing) => (
                    <Card
                        key={housing.id}
                        title={housing.title}
                        picture={housing.cover}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home
