import { useEffect, useState } from "react"
import { IMainDatas, IUserActivity, IUserPerformances, IPerformance, IAverageSessions } from '../types/modelTypes'

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

    /*const fetchDatas = async (url : string) =>  {
        try{
            const response = await fetch(url)
            const datas = await response.json()
            return datas.data
        }catch(error){
            console.log(error)
        }
    }*/

    useEffect(() => {
        async function GetUserDatas(){

            try{

                setLoading(true)
                setError(false)

                const res = await Promise.all([
                    fetch(baseUrl + userUrls.datas),
                    fetch(baseUrl + userUrls.activities),
                    fetch(baseUrl + userUrls.avgSessions),
                    fetch(baseUrl + userUrls.Performance),
                ])

                const [datas, activities, sessions, perfs] = (await Promise.all(res.map(r => r.json()))).map(data => data.data) // datas are sent inside a "data" key, so some unfolding needed

                setUserDatas(datas)
                setUserActivity(activities)
                setAverageSessions(sessions)
                setUserPerformances(perfs)
                setLoading(false)

            }catch(error){

                console.log(error)
                setError(true)

            }finally{

                setLoading(false)

            }
        }

        GetUserDatas()

    },[userId])

    return {mainDatas : userDatas, userActivity : userActivity, userSession : averageSessions, userPerformances : userPerformances, isLoading, isError}
}

export default useAPI