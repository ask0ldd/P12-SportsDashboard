import '../styles/Header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><img src="./sportsee.svg" width="57px" height="57px" alt="sportsees logo"/><span className="app-name">Sportsee</span></li>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header