import { useEffect, useState } from "react"
import { IMainDatas, IUserActivity, IUserPerformances, IPerformance, IAverageSessions } from '../types/modelTypes'
import PerformanceModel, { IPerformanceModel } from "../models/performancesModel"

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

    const [formatedUserDatas, setFormatedUserDatas] = useState<IPerformanceModel>() 


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

                const nestedDatas = await Promise.all(res.map(r => r.json()))
                // datas are nested inside a "data" property, so some unfolding is required
                const [datas, activities, sessions, perfs] = nestedDatas.map(data => data.data)

                setUserDatas(datas)
                setUserActivity(activities)
                setAverageSessions(sessions)
                setUserPerformances(perfs)

                setLoading(false)

                if(datas && activities && sessions && perfs) 
                {
                    setFormatedUserDatas(new PerformanceModel(userId, {mainDatas: datas, userActivity: activities, userSession: sessions, userPerformances: perfs}))
                }
                else{
                    setFormatedUserDatas(new PerformanceModel(userId))
                }

            }catch(error){

                console.log(error)
                setFormatedUserDatas(new PerformanceModel(userId))
                setError(true)

            }finally{

                setLoading(false)

            }
        }

        GetUserDatas()

    },[userId])

    // return {mainDatas : userDatas, userActivity : userActivity, userSession : averageSessions, userPerformances : userPerformances, isLoading, isError}
    return formatedUserDatas
}

export default useAPI