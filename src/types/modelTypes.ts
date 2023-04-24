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

export interface session {
    day : Date
    kilogram : number
    calories : number
}

export interface userActivity {
    userId : number
    sessions : Array<session>
}