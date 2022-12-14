import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

const About = () => {
    const exText = `La bienveillance fait partie des valeurs fondatrices de Kasa.
    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

    const textContent = [
        { title: 'Fiabilité', content: lorem },
        { title: 'Respect', content: exText },
        { title: 'Service', content: lorem },
        { title: 'Responsabilité', content: lorem },
    ]

    return (
        <main>
            <Banner key="about_banner_0" page="about" text="" />
            <section id="collapse_texts">
                <h1 className="visually-hidden">À propos de Kasa</h1>
                {textContent.map((menu, index) => (
                    <Collapse
                        key={`collapse_menu_${index}`}
                        title={menu.title}
                        content={menu.content}
                    />
                ))}
            </section>
        </main>
    )
}

/* <details>
    <summary>Title</summary>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <h2 className="visually-hidden">Title</h2>
</details> */
export default About
