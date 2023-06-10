import { useEffect, useState } from "react"
import { IMainDatas, IUserActivity, IUserPerformances, IPerformance, IAverageSessions, ISession, INutridatas } from '../types/modelTypes'

function useAPI(userId : number){

    const baseUrl = "http://localhost:3000/"

    const userUrls = {
        datas : `user/${userId}`,
        activities : `user/${userId}/activity`,
        avgSessions : `user/${userId}/average-sessions`,
        Performance : `user/${userId}/performance`,
    }

    const [userDatas, setUserDatas] = useState<IMainDatas>()
    const [userActivity, setUserActivity] = useState<IUserActivity>()
    const [userActivity, setUserActivity] = useState<IUserActivity>()
    const [userActivity, setUserActivity] = useState<IUserActivity>()
    userSession : IAverageSessions
    userPerformances : IUserPerformances

    const fetchData = async (url : string) =>  {
        try{
            const response = await fetch(url)
            const datas = await response.json()
            return datas
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=> {

        const datas = fetchData(baseUrl + userUrls.datas)
        const activities = fetchData(baseUrl + userUrls.activities)
        const avgSessions = fetchData(baseUrl + userUrls.avgSessions)
        const performance = fetchData(baseUrl + userUrls.Performance)

    },[userId])

    return {datas:datas, }
}

export default useAPI

/* performance {value: 100, kind:'cardio'} */