import '../styles/DailyActivity.css'
import {USER_ACTIVITY} from '../mocks/datas'

interface props {
    userId : number
}

const DailyActivity = ({userId} : props) => {

    const dailyDatas = [...USER_ACTIVITY[userId].sessions]

    return(
        <article className='dailyactivities-container'>
            aaa
        </article>
    )
}

export default DailyActivity