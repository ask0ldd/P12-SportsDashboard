import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip} from "recharts"
import "../styles/PolarChart.css"
import { IPerformance } from "../types/modelTypes"
import PropTypes from 'prop-types'
import { useRef, useState, useEffect } from "react"
import useBreakpointsTracker from "../hooks/useBreakpointsTracker"

interface props {
    perfDatas : Array<IPerformance>
}

/**
 * Component : LineChart custom training session duration tooltip.
 * @Component
 * @param {Object[]} props - Props.
 * @param {Object[]} props.payload - Payload object.
 * @param {number} props.payload[0].value - Training session duration.
 * @return ( <CustomTooltip/> )
 */
const CustomTooltip = ({payload} : any) => {
  if (payload && payload.length) {
      return (<div style={{backgroundColor:'#fff', color:'#000000', fontSize:'10px', padding:'4px 8px'}}>Value : {payload[0].value}</div>)
  }
}

/**
 * Component : Polarcharts custom position tick.
 * @Component
 * @param {Object[]} props - Props.
 * @param {number} props.containerWidth - PolarChart responsive container width.
 * @param {Object[]} props.payload - Performance type.
 * @param {string} props.payload.value - Type of activity.
 * @return ( <CustomPositionTicks/> )
 */
const CustomPositionTicks = (props: any) => { // improve props typing
    let dx = 0
    let dy = 0
    switch(props.payload.value){
      case 'endurance' :
        dy = 8; 
        dx= -24;
      break;
      case 'intensité' :
        dy = -2; 
        dx = -20;
      break;
      case 'force' :
        dy = 6;
        dx = props?.containerWidth > 260 ? 0 : -2;
      break;
      case 'cardio' :
        dx = props?.containerWidth > 260 ? -28 : -22;
      break;
      case 'energie' :
        dy = props?.containerWidth > 260 ? 6 : 10; 
        dx = props?.containerWidth > 260 ? -32 : -22;
      break;
      case 'vitesse' :
        dx = props?.containerWidth > 260 ? -0 : -10;
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
 * Component : User's performances as a polar chart.
 * @Component
 * @param {Object[]} perfDatas - Performances.
 * @param {string} perfDatas[].kind - Performance type.
 * @param {number} perfDatas[].value - Parformance value.
 * @return ( <PolarChart perfDatas={performanceDatas}/> )
 */
const PolarChart = ({perfDatas} : props) => {

  const containerRef = useRef<any>()
  const [containerWidth, setContainerWidth] = useState()

  const windowDimensions = useBreakpointsTracker()

  useEffect(() => {

    if(!containerRef.current) { 
        return;
    }

    const resizeObserver = new ResizeObserver(() => {
        if(containerRef.current.current.offsetWidth !== containerWidth) {
            setContainerWidth(containerRef.current.current.offsetWidth)
        }
    })

    resizeObserver.observe(containerRef.current.current)

    return function cleanup() {
        resizeObserver.disconnect();
    }

  }, [containerRef.current])


  return(
    <ResponsiveContainer ref={containerRef} width="99%" height={windowDimensions.width < 1025 ? 263 - 48 : 263} className="polarchart-container">
        <RadarChart cx="50%" cy="50%" innerRadius="0%" outerRadius="80%" data={perfDatas}>
        <PolarGrid
            radialLines={false} 
            />
            <PolarRadiusAxis
            /* defines the number of concentric polygons (center point included) */
            tickCount={6}
            tick={false}
            axisLine={false} 
            tickLine={false}
            />
            <PolarAngleAxis 
            /* defines the number of corners for each polygon */
            dataKey="kind" 
            axisLine={false} 
            tickLine={false}
            tick={<CustomPositionTicks containerWidth={containerWidth}/>}
            allowDuplicatedCategory={false}/>
            <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            <Tooltip
            wrapperStyle={{outline:'none', border:'none'}}
            labelStyle={{color:'#000', display:'none', margin:'0'}}
            cursor={false}
            content={CustomTooltip}
            />
        </RadarChart>
    </ResponsiveContainer>
  )
}

PolarChart.propTypes = {
  perfDatas: PropTypes.arrayOf(
      PropTypes.shape({
          kind: PropTypes.string,
          value: PropTypes.number
      })
  )
}

export default PolarChart