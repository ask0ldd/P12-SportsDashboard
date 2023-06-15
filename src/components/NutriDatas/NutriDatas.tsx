import '../../styles/NutriDatas.css'
import NutriArticle from './NutriArticle'
import { INutridatas } from '../../types/modelTypes'
import PropTypes from 'prop-types'

interface props {
    nutriDatas : INutridatas
}

/**
 * Component acting as a container, hosting the nutriarticles.
 * @Component
 * @param {Object[]} nutriDatas - Nutrients ingested, with their quantities.
 * @param {number} nutriDatas.calorieCount - Number of calories ingested.
 * @param {number} nutriDatas.proteinCount - Number of proteins ingested.
 * @param {number} nutriDatas.carbohydrateCount - Number of carbohydrates ingested.
 * @param {number} nutriDatas.lipidCount - Number of lipids ingested.
 * @return ( <NutriArticle iconUrl={iconUrl} iconBg={iconBg} nutriValue={nutriValue} nutriUnit={nutriUnit}/> )
 */
const NutriDatas = ({nutriDatas} : props) => {

    return(
        <div className='nutridatas-container'>
            <NutriArticle iconUrl="icons/fire.svg" iconBg="#FBEAEA" nutriValue={nutriDatas.calorieCount+'Kcal'} nutriUnit="Calories"/>
            <NutriArticle iconUrl="icons/prot.svg" iconBg="#E9F4FB" nutriValue={nutriDatas.proteinCount+'g'} nutriUnit="Proteines"/>
            <NutriArticle iconUrl="icons/apple.svg" iconBg="#FAF6E5" nutriValue={nutriDatas.carbohydrateCount+'g'} nutriUnit="Glucides"/>
            <NutriArticle iconUrl="icons/burger.svg" iconBg="#FBEAEF" nutriValue={nutriDatas.lipidCount+'g'} nutriUnit="Lipides"/>
        </div>
    )
}

NutriDatas.propTypes = {
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
}

export default NutriDatas