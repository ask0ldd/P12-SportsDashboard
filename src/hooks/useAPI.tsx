import { useEffect, useState } from "react"
import PerformanceModel, { IPerformanceModel } from "../models/performancesModel"

function useAPI(userId : number){

    const baseUrl = "http://localhost:3000/"

    const userUrls = {
        datas : `user/${userId}`,
        activities : `user/${userId}/activity`,
        avgSessions : `user/${userId}/average-sessions`,
        Performance : `user/${userId}/performance`,
    }

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

                setLoading(false)

                if(datas && activities && sessions && perfs) 
                {
                    // instanciate the model with the APIs datas
                    setFormatedUserDatas(new PerformanceModel(userId, {mainDatas: datas, userActivity: activities, userSession: sessions, userPerformances: perfs}))
                }
                else{
                    // instaciate the model with some generic blank datas
                    setFormatedUserDatas(new PerformanceModel(userId))
                }

            }catch(error){

                setError(true)
                console.log(error)
                // instaciate the model with some generic blank datas
                setFormatedUserDatas(new PerformanceModel(userId))

            }finally{

                setLoading(false)

            }
        }

        GetUserDatas()

    },[userId])

    return formatedUserDatas
}

export default useAPI