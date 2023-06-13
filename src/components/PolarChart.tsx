import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip} from "recharts"
import "../styles/PolarChart.css"
import { IPerformance } from "../types/modelTypes"

interface props {
    perfDatas : Array<IPerformance>
}

const customEnduranceTick = (value : any) => {
    if(value!=="Endurance") return value
    return (<div><br/>{value as string}</div>)
}

const CustomPositionTicks = (props: any) => {
    let dx = 0
    let dy = 0
    switch(props.payload.value){
      case 'endurance' :
        dy = 8; dx = -24;
      break;
      case 'intensité' :
        dy = -2; dx = -20;
      break;
      case 'force' :
        dy = 6;
      break;
      case 'cardio' :
        dx = -28;
      break;
      case 'energie' :
        dy = 6 ; dx = -32;
      break;      
    }
    return (
      <g transform={`translate(${props.x},${props.y})`}>
        <text fontSize="10px" x={0} y={0} dx={dx} dy={dy} textAnchor="start" fill="#ffffff">
            {props.payload.value}
        </text>
      </g>
    )
}

/**
 * Component showing the performance of the user as a polar chart.
 * @Component
 * @param {Object[]} perfDatas - Performances.
 * @param {string} perfDatas[].kind - Performance type.
 * @param {number} perfDatas[].value - Parformance value.
 * @return ( <PolarChart perfDatas={performanceDatas}/> )
 */
const PolarChart = ({perfDatas} : props) => {

    return(
        /*<article>*/
            <ResponsiveContainer width="99%" height={263} className="polarchart-container">
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
                    tick={<CustomPositionTicks/>}
                    /* tickFormatter={customEnduranceTick} */
                    /*tick={{ fontSize: '10px', fill:'#FFFFFF' }}*/
                    allowDuplicatedCategory={false}/>
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                    <Tooltip
                    wrapperStyle={{outline:'none', border:'none'}}
                    itemStyle={{color:'#000', fontSize:'10px'}}
                    labelStyle={{color:'#000', display:'none'}}
                    cursor={false}
                    />
                </RadarChart>
            </ResponsiveContainer>
        /*</article>*/
    )
}

export default PolarChart