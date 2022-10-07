import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import Host from '../components/Host'
import Tag from '../components/Tag'
import Rating from '../components/Rating'

const data = require('../data/logements.json')

const housing = data[0]

console.log(data.map((element) => element.host.name.split(' ')))

const Logement = () => {
    console.log(housing)

    return (
        <main>
            <Carousel key="001carousel" urlList={housing.pictures} />
            <section id="housing-info">
                <div id="housing-info-top">
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>
                    <div className="tags">
                        {housing.tags.map((tag, index) => (
                            <Tag key={`tag${index}`} name={tag} />
                        ))}
                    </div>
                    <div className="host-info">
                        <Host
                            key={`host001}`}
                            name={housing.host.name}
                            picture={housing.host.picture}
                        />
                    </div>
                    <div className="rating">
                        <Rating key={`rating001}`} score={housing.rating} />
                    </div>
                </div>
                <div id="housing-info-bottom">
                    <div className="description">
                        <Collapse
                            key={`collapse_desc}`}
                            title="Description"
                            content={housing.description}
                        />
                    </div>
                    <div className="equipment">
                        <Collapse
                            key={`collapse_stuff`}
                            title="Equipements"
                            content={housing.equipments}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Logement
