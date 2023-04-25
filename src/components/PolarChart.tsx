import { useState, useEffect } from "react"
import {USER_PERFORMANCE} from '../mocks/datas'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip} from "recharts"
import "../styles/PolarChart.css"
import { performance } from "../types/modelTypes"

interface props {
    perfDatas : Array<performance>
}

const customEnduranceTick = (value : any) => {
    if(value!=="Endurance") return value
    return (<div>{value as string}</div>)
}

const PolarChart = ({perfDatas} : props) => {

    return(
        <ResponsiveContainer width="33%" height="100%" className="polarchart-container">
            <RadarChart cx="50%" cy="50%" innerRadius="0%" outerRadius="80%" data={perfDatas}>
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
                tickFormatter={customEnduranceTick}
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