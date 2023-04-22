import '../../styles/NutriDatas.css'
import NutriArticle from './NutriArticle'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../mocks/datas'

interface props {
    userId : number
}

const NutriDatas = ({userId} : props) => {

    const nutridatas = {...USER_MAIN_DATA[userId].keyData}

    return(
        <div className='nutridatas-container'>
            <NutriArticle iconUrl="icons/fire.svg" iconBg="#FBEAEA" nutriValue={nutridatas.calorieCount+'Kcal'} nutriUnit="Calories"/>
            <NutriArticle iconUrl="icons/prot.svg" iconBg="#E9F4FB" nutriValue={nutridatas.proteinCount+'g'} nutriUnit="Proteines"/>
            <NutriArticle iconUrl="icons/apple.svg" iconBg="#FAF6E5" nutriValue={nutridatas.carbohydrateCount+'g'} nutriUnit="Glucides"/>
            <NutriArticle iconUrl="icons/burger.svg" iconBg="#FBEAEF" nutriValue={nutridatas.lipidCount+'g'} nutriUnit="Lipides"/>
        </div>
    )
}

export default NutriDatas