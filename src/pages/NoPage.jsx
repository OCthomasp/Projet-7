const NoPage = () => {
    return (
        <main>
            <section id="error">
                <h1 className="error-title">404</h1>
                <h2 className="error-subtitle">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <a href="/" className="std-link">
                    Retourner sur la page d'accueil
                </a>
            </section>
        </main>
    )
}

export default NoPage
