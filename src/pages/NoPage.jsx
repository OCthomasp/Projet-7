const NoPage = () => {
    return (
        <div>
            <section id="error">
                <h1 class="error-title">404</h1>
                <h2 class="error-subtitle">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <a href="/" class="std-link">
                    Retourner sur la page d'accueil
                </a>
            </section>
        </div>
    )
}

export default NoPage
