function useAPI(user : number){

    const UserURIs = {
        datas : `user/${user}`,
        activities : `user/${user}/activity`,
        avgSessions : `user/${user}/average-sessions`,
        Performance : `user/${user}/performance`,
    }

}

export default useAPI

export interface IUserDatas{
    mainDatas: IUserMainDatas
    performance: Array<IPerformanceDatas>
    activity: Array<ISessionActivity>
    avgSessions : Array<ISessionAvgLength>
}

interface IPerformanceDatas{
    value: number
    kind: string
}

interface IUserMainDatas{
    id: number
    firstname: string
    lastname: string
    age: number
    todayScore: number
    caloriesCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
}

interface ISessionActivity{
    day: string
    kilogram: number
    calories: number
}

interface ISessionAvgLength{
    day: number
    sessionLength: number
}

/* performance {value: 100, kind:'cardio'} */