import '../styles/Header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><img src="./sportsee.svg" width="57px" height="57px" alt="sportsees logo"/><span className="app-name">Sportsee</span></li>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglages</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header