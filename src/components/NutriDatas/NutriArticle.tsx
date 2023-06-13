import '../../styles/NutriArticle.css'

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
 * @param {string} iconUrl - Url of the nutrient icon.
 * @param {string} iconBg - Color of the background behind this icon.
 * @param {number} nutriValue - Quantity ingested.
 * @param {string} nutriUnit - Quantity related unit.
 * @return ( <NutriArticle iconUrl={iconUrl} iconBg={iconBg} nutriValue={nutriValue} nutriUnit={nutriUnit}/> )
 */
const NutriArticle = ({iconUrl, iconBg, nutriValue, nutriUnit} : props) => {
    return(
        <article className='nutri-article'>
            <figure className='nutri-icon' style={{backgroundColor:iconBg}}>
                <img src={iconUrl}/>
            </figure>
            <div className='nutri-stats'>
                <span>{nutriValue}</span>
                <span>{nutriUnit}</span>
            </div>
        </article>
    )
}

export default NutriArticle