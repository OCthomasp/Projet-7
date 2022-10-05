import Banner from '../components/Banner'
import Card from '../components/Card'
import '../styles/home.css'
const data = require('../data/logements.json')

// const data = JSON.parse(dataJSON)

const Home = () => {
    return (
        <section>
            <Banner />
            {data.map((housing) => (
                <Card
                    key={housing.id}
                    title={housing.title}
                    picture={housing.cover}
                />
            ))}
        </section>
    )
}

export default Home
