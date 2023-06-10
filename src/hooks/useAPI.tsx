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
    const [averageSessions, setAverageSessions] = useState<IAverageSessions>()
    const [userPerformances, setUserPerformances] = useState<IUserPerformances>()
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    const fetchData = async (url : string) =>  {
        try{
            const response = await fetch(url)
            const datas = await response.json()
            return datas
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        async function GetUserDatas(){

            const datas = await fetchData(baseUrl + userUrls.datas)
            const activities = await fetchData(baseUrl + userUrls.activities)
            const sessions = await fetchData(baseUrl + userUrls.avgSessions)
            const perfs = await fetchData(baseUrl + userUrls.Performance)
            if(datas == null || activities == null || sessions == null || perfs == null){
                setError(true)
            }
            else{
                setUserActivity(activities)
                setAverageSessions(sessions)
                setUserDatas(datas)
                setUserPerformances(perfs)
            }
        }

        GetUserDatas()

    },[userId])

    return {mainDatas : userDatas, userActivity : userActivity, userSession : averageSessions, userPerformances : userPerformances, isLoading, isError}
}

export default useAPI

/* performance {value: 100, kind:'cardio'} */