import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'

const Header = () => {
    return (
        <>
            <header>
                <a href="#">
                    <img src={logo} alt="logo Kasa" />
                </a>

                <nav>
                    <Link to="/">Acceuil</Link>
                    <Link to="/about">A propos</Link>
                    {/* <a href="home">Acceuil</a>
                <a href="about">A propos</a>  */}
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header
