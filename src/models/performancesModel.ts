// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/datas'
import { IMainDatas, IUserActivity, IUserPerformances, IPerformance, IAverageSessions, ISession, INutridatas, ISessionAvg, ISessionAvgDayString } from '../types/modelTypes'
import { blankDailyActivities, blankNutridatas, blankPerformancesFolded, blankSessionsInt, blankUserInfos } from '../mocks/blankDatas'

class PerformanceModel {

    mainDatas : IMainDatas
    userActivity : IUserActivity
    userSession : IAverageSessions
    userPerformances : IUserPerformances

    constructor(userId : number, datas?: {mainDatas : IMainDatas, userActivity : IUserActivity, userSession : IAverageSessions, userPerformances : IUserPerformances}){
        // if some datas haven't been successfully retrieved from the API (i.e. not passed as params) => completed with blankdatas
        if(datas == null){
            this.mainDatas = { id: 0, userInfos: {...blankUserInfos}, score: 0, keyData: {...blankNutridatas} }
            this.userActivity = { userId : 0, sessions: [...blankDailyActivities] }
            this.userSession = { userId : 0, sessions: [...blankSessionsInt] }
            this.userPerformances = {...blankPerformancesFolded}
        }else{
            this.mainDatas = datas.mainDatas ? datas.mainDatas : { id: 0, userInfos: {...blankUserInfos}, score: 0, keyData: {...blankNutridatas} }
            this.userActivity = datas.userActivity ? datas.userActivity : { userId : 0, sessions: [...blankDailyActivities] }
            this.userSession = datas.userSession ? datas.userSession : { userId : 0, sessions: [...blankSessionsInt] }
            this.userPerformances = datas.userPerformances ? datas.userPerformances : {...blankPerformancesFolded}
        }
    }

    get score() {
        if(!this.mainDatas.score && !this.mainDatas.todayScore) return 0
        // obsolete, just a memo : "as number" to override the type by default which is : number | undefined (due to the fact it doesn't always exist among the datas)
        const score : number | undefined = this.mainDatas.score || this.mainDatas.todayScore
        // check if 0 <= score <= 1
        return score && score >= 0 && score <= 1 ? score : 0
    }

    get firstName() {
        const firstName : string = this.mainDatas.userInfos.firstName || 'N/A'
        return firstName
    }

    get nutriDatas() {
        // converting cal to kCal : this.mainDatas.keyData.calorieCount / 1000
        const nutriDatas : INutridatas = {...this.mainDatas.keyData, calorieCount: this.mainDatas.keyData.calorieCount / 1000 } || {...blankNutridatas} 
        return nutriDatas
    }

    get avgSessions() {
        const week : Array<string> = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        // sorting by date as a security
        const sortedSessions = [...this.userSession.sessions].sort(function (a : ISessionAvg, b : ISessionAvg){
            if(a.day > b.day) return 1
            if(a.day < b.day) return -1
            return 0
        }).slice(0,7)
        // from : days : 1 -> 7 => to : days : L -> D
        const formatedSessions = sortedSessions.map(session => {return ({ day : week[typeof(session.day) === 'number' ? session.day-1 : 0], sessionLength : session.sessionLength })}) || [...blankSessionsInt]
        return formatedSessions
    }

    get dailyDatas (){
        // sorting by date as a security
        const sessions : Array<ISession> = [...this.userActivity.sessions] || [...blankDailyActivities]
        sessions.sort(function (a : ISession, b : ISession){
            if(new Date(a.day) > new Date(b.day)) return 1
            if(new Date(a.day) < new Date(b.day)) return -1
            return 0
        })
        return sessions
    }

    get performanceDatas (){
        const perfs : Array<IPerformance> = [...this.userPerformances.data] || {...blankPerformancesFolded}.data
        // {1: 'cardio', ... , 6: 'intensity'} + {value: 50, kind: 1} => {value: 50, kind: 'cardio'}
        const translations : Dico = {cardio : 'cardio', energy : 'energie', endurance : 'endurance', strength : 'force', speed : 'vitesse', intensity : 'intensité'}
        const perfKind : Array<string> = Object.values(this.userPerformances.kind)
        const formatedPerfs = perfs.map((perf : IPerformance) => {
            return {value : perf.value, kind : translations[perfKind[perf.kind-1] as keyof Dico]}
        })
        // needs to be in reversed order to be displayed the right way
        return formatedPerfs.reverse()
    }
}

interface Dico{
    cardio : string
    energy : string
    endurance : string
    strength : string
    speed : string
    intensity : string
}

export interface IPerformanceModel{
    mainDatas : IMainDatas
    userActivity : IUserActivity
    userSession : IAverageSessions
    userPerformances : IUserPerformances
    firstName : string
    score : number
    performanceDatas : Array<IPerformance>
    nutriDatas : INutridatas
    dailyDatas : Array<ISession>
    avgSessions : Array<ISessionAvgDayString>
}

export default PerformanceModel