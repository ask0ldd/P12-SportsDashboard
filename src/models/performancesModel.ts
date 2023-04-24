import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/datas'
import { mainDatas, userActivity, userPerformances, averageSessions } from '../types/modelTypes'

class PerformanceDatas {

    mainDatas : mainDatas
    userActivities : userPerformances

    constructor(userId : number){
        // console.log(USER_MAIN_DATA.filter(data => data.id === userId))
        let mDatas = (USER_MAIN_DATA.filter((data : mainDatas) => data.id === userId))[0]
        this.mainDatas = mDatas
        let activity = (USER_PERFORMANCE.filter((data : userPerformances) => data.userId === userId))[0]
        this.userActivities = activity
        let session = (USER_AVERAGE_SESSIONS.filter((data : averageSessions) => data.userId === userId))[0]

    }
}

export default PerformanceDatas