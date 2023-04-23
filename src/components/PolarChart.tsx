import { useState, useEffect } from "react"
import {USER_PERFORMANCE} from '../mocks/datas'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip} from "recharts"
import "../styles/PolarChart.css"

interface props {
    userId : number
}

const PolarChart = ({userId} : props) => {

    const performancesDatas = [...USER_PERFORMANCE[userId].data]

    return(
        <ResponsiveContainer width="33%" height={260} className="polarchart-container">
            <RadarChart cx="50%" cy="50%" innerRadius="0%" outerRadius="80%" data={performancesDatas}>
            <PolarGrid
                radialLines={false} // ERROR : attribute d: Expected moveto path command ('M' or 'm'), "Z". SVG Attributes
                // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
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