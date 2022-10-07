import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="logo Kasa" />
                <nav>
                    <Link to="/">Acceuil</Link>
                    <Link to="/about">A propos</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header
