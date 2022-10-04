import Header from '../components/Header'

const NoPage = () => {
    return (
        <body>
            <section id="error">
                <h1 class="error-title">404</h1>
                <h2 class="error-subtitle">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <a class="std-link">Retourner sur la page d'accueil</a>
            </section>
        </body>
    )
}

export default NoPage