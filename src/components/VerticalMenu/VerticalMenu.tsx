import '../../styles/VerticalMenu.css'
import MenuIcon from './MenuIcon'

const VerticalMenu = () => {
    return(
        <section className="vertical-container">
            <MenuIcon iconUrl="../icons/yoga.svg"/>
            <MenuIcon iconUrl="../icons/swim.svg"/>
            <MenuIcon iconUrl="../icons/cycle.svg"/>
            <MenuIcon iconUrl="../icons/weight.svg"/>
        </section>
    )
}

export default VerticalMenu