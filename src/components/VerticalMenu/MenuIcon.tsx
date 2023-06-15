import '../../styles/MenuIcon.css'
import PropTypes from 'prop-types'

interface props {
    iconUrl? : string | undefined
}

const MenuIcon = ({iconUrl} : props) => {
    return(
        <a className='vmenu-icon' href="#"><img src={iconUrl}/></a>
    )
}

MenuIcon.propTypes = {
    iconUrl: PropTypes.string,
}

export default MenuIcon