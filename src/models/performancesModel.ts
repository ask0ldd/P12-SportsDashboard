import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/datas'
import { IMainDatas, IUserActivity, IUserPerformances, IPerformance, IAverageSessions, ISession, INutridatas, ISessionAvg } from '../types/modelTypes'

class PerformanceModel {

    mainDatas : IMainDatas
    userActivity : IUserActivity
    userSession : IAverageSessions
    userPerformances : IUserPerformances

    constructor(userId : number, datas?: {mainDatas : IMainDatas, userActivity : IUserActivity, userSession : IAverageSessions, userPerformances : IUserPerformances}){
        // if the datas haven't been successfully retrieved from the API (i.e. not passed as params) => mock them
        // remplacer par blanks instead of mock datas uniquement les datas manquantes, pas toutes les datas
        if(datas == null){
            this.mainDatas = ([...USER_MAIN_DATA].filter((data : IMainDatas) => data.id === userId))[0]
            this.userActivity = ([...USER_ACTIVITY].filter((data : IUserActivity) => data.userId === userId))[0]
            this.userSession = ([...USER_AVERAGE_SESSIONS].filter((data : IAverageSessions) => data.userId === userId))[0]
            this.userPerformances = ([...USER_PERFORMANCE].filter((data : IUserPerformances) => data.userId === userId))[0]
        }else{
            this.mainDatas = datas.mainDatas
            this.userActivity = datas.userActivity
            this.userSession = datas.userSession
            this.userPerformances = datas.userPerformances
            // !!!! => this.userPerformances = datas.userPerformances ? datas.userPerformances : ([...USER_PERFORMANCE].filter((data : IUserPerformances) => data.userId === userId))[0] <= should be blank datas
        }
    }

    get score() {
        // "as number" to override the type by default which is : number | undefined (due to the fact it doesn't always exist among the datas)
        const score : number = this.mainDatas.score as number || this.mainDatas.todayScore as number
        // check if 0 <= score <= 1
        return score >= 0 && score <= 1 ? score : 0
    }

    get firstName() {
        const firstName : string = this.mainDatas.userInfos.firstName
        return firstName
    }

    get nutriDatas() {
        const nutriDatas : INutridatas = this.mainDatas.keyData
        nutriDatas.calorieCount = nutriDatas.calorieCount / 100
        return nutriDatas
    }

    get avgSessions() {
        const week : Array<string> = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        // sorting by day as a security
        const sortedSessions = [...this.userSession.sessions]
        sortedSessions.sort(function (a : ISessionAvg, b : ISessionAvg){
            if(new Date(a.day) > new Date(b.day)) return 1
            if(new Date(a.day) < new Date(b.day)) return -1
            return 0
        })
        // from : days : 1 -> 7 => to : days : L -> D
        const formatedSessions = this.userSession.sessions.map(session => {return ({ day : week[typeof(session.day) === 'number' ? session.day-1 : 0], sessionLength : session.sessionLength })})
        return formatedSessions
    }

    get dailyDatas (){
        // sorting by date as a security
        const sessions : Array<ISession> = [...this.userActivity.sessions]
        sessions.sort(function (a : ISession, b : ISession){
            if(new Date(a.day) > new Date(b.day)) return 1
            if(new Date(a.day) < new Date(b.day)) return -1
            return 0
        })
        return sessions
    }

    get performanceDatas (){ // !!! gerer si données incorrectes
        const perfs : Array<IPerformance> = [...this.userPerformances.data]
        // {1: 'cardio', ... , 6: 'intensity'} => ['cardio', ... , 'intensity']
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

export default PerformanceModel