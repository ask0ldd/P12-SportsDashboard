import '../../styles/NutriArticle.css'

interface props {
    icon : string
    iconBg : string
    nutriValue : string
    nutriUnit : string
}

const NutriArticle = ({icon, iconBg, nutriValue, nutriUnit} : props) => {
    return(
        <article className='nutri-article'>
            <figure className='nutri-icon' style={{backgroundColor:iconBg}}>
                <img src={icon}/>
            </figure>
            <div className='nutri-stats'>
                <span>{nutriValue}</span>
                <span>{nutriUnit}</span>
            </div>
        </article>
    )
}

export default NutriArticle