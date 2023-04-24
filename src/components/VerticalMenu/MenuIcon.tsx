import '../../styles/MenuIcon.css'

interface props {
    iconUrl? : string | undefined
}

const MenuIcon = ({iconUrl} : props) => {
    return(
        <a className='vmenu-icon' href="#"><img src={iconUrl}/></a>
    )
}

export default MenuIcon