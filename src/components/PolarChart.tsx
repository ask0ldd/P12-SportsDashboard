import { useState, useEffect } from "react"
import {USER_PERFORMANCE} from '../mocks/datas'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip} from "recharts"
import "../styles/PolarChart.css"

interface props {
    userId : number
}

interface performance {
    value:number
    kind:any
}

interface parameter {
    key:number
    kind:string
}

const PolarChart = ({userId} : props) => {

    const translationsArray = {'cardio' : 'Cardio', 'energy' : 'Energie', 'endurance' : 'Endurance', 'strength' : 'Force', 'speed' : 'Vitesse', 'intensity' : 'Intensité'}
    /* kind: { 1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity' } */
    /* to ['cardio', 'energy', 'endurance', 'strength', 'speed', 'intensity'] / consequence : index decreased by 1 */
    const perfParameters : Array<string> = Object.values(USER_PERFORMANCE[userId].kind)
    const perfDatas : Array<performance> = USER_PERFORMANCE[userId].data
    const perfDataswTextualKinds : Array<performance> = perfDatas.map(data => {
        return {value : data.value, kind : translationsArray[perfParameters[data.kind-1] as keyof Object]} // { value: 200, kind: 1 } to { value: 200, kind: cardio } // as keyof Object : needs to specify to typescript that the key is of a valid type despite being typed any
    })
    // data order is reversed so :
    const perfDatasReversed = perfDataswTextualKinds.reverse()

    return(
        <ResponsiveContainer width="33%" height={260} className="polarchart-container">
            <RadarChart cx="50%" cy="50%" innerRadius="0%" outerRadius="80%" data={perfDatasReversed}>
            <PolarGrid
                radialLines={false} 
                />
                <PolarRadiusAxis
                tickCount={6}
                tick={false}
                axisLine={false} 
                tickLine={false}
                />
                <PolarAngleAxis 
                dataKey="kind" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: '10px', fill:'#FFFFFF' }}
                allowDuplicatedCategory={false}/>
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                <Tooltip
                wrapperStyle={{outline:'none', border:'none'}}
                itemStyle={{color:'#000', fontSize:'10px'}}
                labelStyle={{color:'#000',display:'none'}}
                cursor={false}
                />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default PolarChart