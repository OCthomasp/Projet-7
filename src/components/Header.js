import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="logo Kasa" />
                <nav>
                    <h1 className="visually-hidden">Navigation</h1>
                    <Link to="/">Acceuil</Link>
                    <Link to="/about">À propos</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header
