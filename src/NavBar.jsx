// Importación de imágenes
import {Link} from 'react-router-dom';
import Logo from '../src/assets/img/jtglezl2.png'


const NavBar = ({logo}) => {
    return(

        <header className="headbar" id = "navbar">
        <img src= {Logo} alt="" className="logo"/>
        <nav className="navbar">
            <ul className="navbar__lista">
                <li className="navbar__item"><a href="/" className="navbar__link">Home</a></li>
                <li className="navbar__item"><a href="/#AboutMe" className="navbar__link">About Me</a></li>
                <li className="navbar__item"><a href="/#Projects" className="navbar__link">Projects</a></li>
                <li className="navbar__item"><Link to="/contact" className="navbar__link">Contact</Link></li>
            </ul>
        </nav>
    </header>

    )
}

export default NavBar;