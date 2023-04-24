import '../../styles/NutriDatas.css'
import NutriArticle from './NutriArticle'
import { nutridatas } from '../../types/modelTypes'

interface props {
    nutriDatas : nutridatas
}

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

export default NutriDatas