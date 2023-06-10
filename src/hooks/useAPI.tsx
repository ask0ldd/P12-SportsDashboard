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

    const fetchDatas = async (url : string) =>  {
        try{
            const response = await fetch(url)
            const datas = await response.json()
            return datas.data
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        async function GetUserDatas(){

            setLoading(true)
            setError(false)
            const datas = await fetchDatas(baseUrl + userUrls.datas)
            const activities = await fetchDatas(baseUrl + userUrls.activities)
            const sessions = await fetchDatas(baseUrl + userUrls.avgSessions)
            const perfs = await fetchDatas(baseUrl + userUrls.Performance)

            if(datas == null || activities == null || sessions == null || perfs == null){
                setError(true)
                setLoading(false)
            }
            else{
                setUserDatas(datas)
                console.log(datas)
                setUserActivity(activities)
                console.log(activities)
                setAverageSessions(sessions)
                console.log(sessions)
                setUserPerformances(perfs)
                console.log(perfs)
                setLoading(false)
            }
        }

        GetUserDatas()

    },[userId])

    return {mainDatas : userDatas, userActivity : userActivity, userSession : averageSessions, userPerformances : userPerformances, isLoading, isError}
}

export default useAPI

/* performance {value: 100, kind:'cardio'} */