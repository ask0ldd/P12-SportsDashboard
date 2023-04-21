import '../../styles/NutriDatas.css'
import NutriArticle from './NutriArticle'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../mocks/datas'

const NutriDatas = () => {
    return(
        <div className='nutridatas-container'>
            <NutriArticle icon="icons/fire.svg" iconBg="#FBEAEA" nutriValue={USER_MAIN_DATA[0].keyData.calorieCount+'Kcal'} nutriUnit="Calories"/>
            <NutriArticle icon="icons/prot.svg" iconBg="#E9F4FB" nutriValue={USER_MAIN_DATA[0].keyData.calorieCount+'Kcal'} nutriUnit="Calories"/>
            <NutriArticle icon="icons/apple.svg" iconBg="#FAF6E5" nutriValue={USER_MAIN_DATA[0].keyData.calorieCount+'Kcal'} nutriUnit="Calories"/>
            <NutriArticle icon="icons/burger.svg" iconBg="#FBEAEF" nutriValue={USER_MAIN_DATA[0].keyData.calorieCount+'Kcal'} nutriUnit="Calories"/>
        </div>
    )
}

export default NutriDatas