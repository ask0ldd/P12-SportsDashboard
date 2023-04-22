import '../../styles/MenuIcon.css'

interface props {
    iconUrl? : string | undefined
}

const MenuIcon = ({iconUrl} : props) => {
    return(
        <div className='vmenu-icon'><img src={iconUrl}/></div>
    )
}

export default MenuIcon