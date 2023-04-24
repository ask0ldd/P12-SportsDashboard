/* */
/* mainDatas interface */
/* */

export interface userinfos {
    firstName : string
    lastName : string
    age : number
}

export interface nutridatas {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
}

export interface mainDatas {
    id: number
    userInfos: userinfos
    todayScore?: number
    score?: number
    keyData: nutridatas
}

/* */
/* userActivity interface */
/* */
export interface session {
    day : Date
    kilogram : number
    calories : number
}

export interface userActivity {
    userId : number
    sessions : Array<session>
}

/* */
/* averageSessions interface */
/* */

export interface sessionAvg {
    day : number
    sessionLength : number
}

export interface averageSessions {
    userId : number
    sessions : Array<sessionAvg>
}

/* */
/* userPerformances interface */
/* */

export interface performance {
    value:number
    kind:any
}

export interface kind {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
}

export interface userPerformances {
    userId : number
    kind : kind
    data : Array<performance>
}