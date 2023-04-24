import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/datas'
import { mainDatas, userActivity, userPerformances, averageSessions } from '../types/modelTypes'

class PerformanceDatas {

    mainDatas : mainDatas
    userActivity : userActivity
    userSession : averageSessions
    userPerformances : userPerformances

    constructor(userId : number){
        this.mainDatas = (USER_MAIN_DATA.filter((data : mainDatas) => data.id === userId))[0]
        this.userActivity = (USER_ACTIVITY.filter((data : userActivity) => data.userId === userId))[0]
        this.userSession = (USER_AVERAGE_SESSIONS.filter((data : averageSessions) => data.userId === userId))[0]
        this.userPerformances = (USER_PERFORMANCE.filter((data : userPerformances) => data.userId === userId))[0]
    }

    get score () {
        return this.mainDatas.score || this.mainDatas.todayScore
    }

    get firstName(){
        return this.mainDatas.userInfos.firstName
    }
}

export default PerformanceDatas