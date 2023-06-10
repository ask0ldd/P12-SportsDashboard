/* */
/* mainDatas interface */
/* */

export interface IUserinfos {
    firstName : string
    lastName : string
    age : number
}

export interface INutridatas {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
}

export interface IMainDatas {
    id: number
    userInfos: IUserinfos
    todayScore?: number
    score?: number
    keyData: INutridatas
}

/* */
/* userActivity interface */
/* */
export interface ISession {
    day : string
    kilogram : number
    calories : number
}

export interface IUserActivity {
    userId : number
    sessions : Array<ISession>
}

/* */
/* averageSessions interface */
/* */

export interface ISessionAvg {
    day : number
    sessionLength : number
}

export interface IAverageSessions {
    userId : number
    sessions : Array<ISessionAvg>
}

/* */
/* userPerformances interface */
/* */

export interface IPerformance {
    value:number
    kind:any
}

export interface IKind {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
}

export interface IUserPerformances {
    userId : number
    kind : IKind
    data : Array<IPerformance>
}