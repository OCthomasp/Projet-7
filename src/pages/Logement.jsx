import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import Host from '../components/Host'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'

const data = require('../data/logements.json')

const Logement = () => {
    // Get id from url
    const { id } = useParams()

    // find matching housing from json data
    const housing = data.filter((housing) => {
        return housing.id === id
    })[0]

    return (
        <main>
            <Carousel key="001carousel" urlList={housing.pictures} />
            <section id="housing-info">
                <div id="housing-info-top">
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>
                    <div className="tags">
                        {housing.tags.map((tag, index) => (
                            <Tag key={`tag_${id}_${index}`} name={tag} />
                        ))}
                    </div>
                    <div className="host-info">
                        <h2 className="visually-hidden">
                            Annonce de {housing.host.name}
                        </h2>
                        <Host
                            key={`host_${id}`}
                            name={housing.host.name}
                            picture={housing.host.picture}
                        />
                    </div>
                    <div className="rating">
                        <h2 className="visually-hidden">
                            Avis : {housing.rating}/5
                        </h2>
                        <Rating key={'rating'} score={housing.rating} />
                    </div>
                </div>
                <div id="housing-info-bottom">
                    <div className="description">
                        <Collapse
                            key={`collapse_desc_${id}`}
                            title="Description"
                            content={housing.description}
                        />
                    </div>
                    <div className="equipment">
                        <Collapse
                            key={`collapse_equipment_${id}`}
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
