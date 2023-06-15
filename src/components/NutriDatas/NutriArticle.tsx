import '../../styles/NutriArticle.css'
import PropTypes from 'prop-types'

interface props {
    iconUrl : string
    iconBg : string
    nutriValue : string
    nutriUnit : string
}

// !!! needs to be updated
/**
 * Component showing the quantity ingested of a specific nutrient.
 * @Component
 * @param {Object[]} props - Props.
 * @param {string} props.iconUrl - Url of the nutrient icon.
 * @param {string} props.iconBg - Color of the background behind this icon.
 * @param {string} props.nutriValue - Quantity ingested.
 * @param {string} props.nutriUnit - Quantity related unit.
 * @return ( <NutriArticle iconUrl={iconUrl} iconBg={iconBg} nutriValue={nutriValue} nutriUnit={nutriUnit}/> )
 */
const NutriArticle = ({iconUrl, iconBg, nutriValue, nutriUnit} : props) => {
    return(
        <article className='nutri-article'>
            <figure className='nutri-icon' style={{backgroundColor:iconBg}}>
                <img src={iconUrl}/>
            </figure>
            <div className='nutri-stats'>
                <span className='nutri-value'>{nutriValue}</span>
                <span className='nutri-type'>{nutriUnit}</span>
            </div>
        </article>
    )
}

NutriArticle.propTypes = {
    iconUrl: PropTypes.string,
    iconBg: PropTypes.string,
    nutriValue: PropTypes.string,
    nutriUnit: PropTypes.string,
}

export default NutriArticle