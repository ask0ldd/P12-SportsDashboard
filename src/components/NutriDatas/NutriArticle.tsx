import '../../styles/NutriArticle.css'

interface props {
    iconUrl : string
    iconBg : string
    nutriValue : string
    nutriUnit : string
}

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