import logo from '../assets/LOGO.svg';


const Header = () => {
    return (
        <header>
            <a href="#">
                <img src={logo} alt="logo Kasa"/>
            </a>

            <nav>
                <a href="home">Acceuil</a>
                <a href="about">A propos</a> 
            </nav> 
        </header>
    );
};

export default Header;