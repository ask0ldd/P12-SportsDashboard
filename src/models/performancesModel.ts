import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/datas'
import { userinfos, nutridatas, mainDatas } from '../types/modelTypes'

class PerformanceDatas {

    mainDatas : mainDatas

    constructor(userId : number){
        // console.log(USER_MAIN_DATA.filter(data => data.id === userId))
        let datas = (USER_MAIN_DATA.filter((data : mainDatas) => data.id === userId))[0]
        this.mainDatas = datas
    }
}

export default PerformanceDatas