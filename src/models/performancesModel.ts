import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/datas'
import { mainDatas, userActivity, userPerformances, averageSessions, session } from '../types/modelTypes'

class PerformanceModel {

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

    get score() {
        // "as number" to override the type by default : number | undefined (due to the fact it doesn't always exist among the datas)
        return this.mainDatas.score as number || this.mainDatas.todayScore as number
    }

    get firstName() {
        return this.mainDatas.userInfos.firstName
    }

    get nutriDatas() {
        return this.mainDatas.keyData
    }

    get avgSessions() {
        const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        // day : 1 - day : 6 to day : L - day : D
        const formatedSessions  = this.userSession.sessions.map(session => {return ({ day : week[session.day-1], sessionLength : session.sessionLength })})
        return formatedSessions
    }

    get dailyDatas (){
        // sorting by date as a security
        const sessions = [...this.userActivity.sessions]
        sessions.sort(function (a : session, b : session){
            if(new Date(a.day) > new Date(b.day)) return 1
            if(new Date(a.day) < new Date(b.day)) return -1
            return 0
        })
        return sessions
    }
}

export default PerformanceModel