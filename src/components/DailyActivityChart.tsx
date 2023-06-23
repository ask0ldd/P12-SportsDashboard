import '../styles/DailyActivityChart.css'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts'
import { ISession } from '../types/modelTypes'
import PropTypes from 'prop-types'

interface props {
    dailyDatas : Array<ISession>
}

/**
 * Component : Polarcharts custom endurance tick.
 * @Component
 * @param {Object[]} props - Props.
 * @param {Object[]} props.payload - Payload object.
 * @param {string} props.payload.value - Type of activity.
 * @return ( <CustomXAxisTick/> )
 */
const CustomXAxisTick = (value : number, index:number) : string => {
    return (index+1).toString()
}

/**
 * Component : Barchart Legend Formatter.
 * @Component
 * @param {string} value - Props.
 * @return ( <resizedLegendValue/> )
 */
const resizedLegendValue = (value: string/*, entry: any*/) => {
    return <span style={{fontSize:"14px", color:"#74798C", marginLeft:"8px"}}>{value}</span>
}

/**
 * Component : Barchart custom weight / calorie consumption tick.
 * @Component
 * @param {Object[]} props - Props.
 * @param {Object[]} props.payload - Payload object.
 * @param {string[]} props.payload.value
 * @param {string} props.payload[0].value - weight
 * @param {string} props.payload[1].value - calorie consumption
 * @return ( <CustomTooltip/> )
 */
const CustomTooltip = ({payload} : any) => {
    if(payload && payload.length){
        return(
            <div className="dailyactivities-tooltip">
                <p>{payload[0].value+'Kg'}</p>
                <p>{payload[1].value+'KCal'}</p>
            </div>
        )
    }
}

/**
 * Component showing the evolution of the weight of the user and its calories consumption.
 * @Component
 * @param {Object[]} dailydatas - Training sessions day by day.
 * @param {string} dailydatas[].day - The day of the week.
 * @param {number} dailydatas[].kilogram - User's weight of the day.
 * @param {number} dailydatas[].calories - Number of calories ingested.
 * @return ( <DailyActivityChart dailyDatas={dailyDatas}/> )
 */
const DailyActivityChart = ({dailyDatas} : props) => {

    return(
        <article className='dailyactivities-container'>
            <ResponsiveContainer width="99%" height={320}>
                <BarChart
                barCategoryGap='10%'
                barGap={8}
                data={dailyDatas}
                margin={{
                    top: 48,
                    right: 0,
                    left: 0,
                    bottom: 48,
                }}>
                    <Tooltip
                    viewBox={{ x: 0, y: 0, width: 40, height: 65 }} wrapperStyle={{backgroundColor:"#E60000", outline:"none", border:"none"}}
                    content={CustomTooltip} /* grey active bar hover */ cursor={{opacity:0.5}} />
                    <text /* titre graph */ x={12} y={30} fill="#20253A" textAnchor="middle" dominantBaseline="central">
                        <tspan x="62" dy="0" fontSize="14" fontWeight={600}>Activité quotidienne</tspan>
                    </text>

                    <CartesianGrid  strokeDasharray="2 2"
                    /* only the horizontal lines of the grids are displayed */
                    vertical={false} stroke="#DEDEDE" />

                    <XAxis tickLine={false} width={1} domain={['dataMin', 'dataMax']} dataKey="day"
                    tickFormatter={CustomXAxisTick} stroke="#DEDEDE" tick={{ fill: '#9B9EAC' }} tickMargin={16} />

                    <YAxis 
                    yAxisId={0} /* id kg Axis */ dataKey="kilogram" type="number" domain={['dataMin-1', 'dataMax+2']} /* Y axis base value / max value */
                    tickCount={3} /* 3 values on Y weight axis */ tickLine={false} /* only numbers */ axisLine={false}
                    allowDecimals={false} orientation="right" tick={{ fill: '#9B9EAC' }} />

                    <YAxis 
                    hide={true} /* don't need to be shown, only here to scale bars */ yAxisId={1} /* id calories Axis */
                    dataKey="calories" type="number" domain={['dataMin-100', 'dataMax+100']} allowDecimals={false} />

                    <Legend align="right" verticalAlign='top' width={290} iconSize={8} wrapperStyle={{top:8, right:24}}
                    payload={[{ value: 'Poids (kg)', type: 'circle', id: 'ID01', color: '#282D30'}, { value: 'Calories brûlées (kCal)', type: 'circle', id: 'ID02', color: '#E60000' }]}
                    formatter={resizedLegendValue} />

                    <Bar dataKey="kilogram" fill="#282D30" barSize={7} /* barSize = bar width */ radius={[25, 25, 0, 0]}
                    yAxisId={0} /* linked to this specific Y axis, determines how the bar is scaled */ />
                    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[25, 25, 0, 0]} yAxisId={1}/>
                </BarChart>
            </ResponsiveContainer>
        </article>
    )
}

DailyActivityChart.propTypes = {
    dailydatas: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string,
            kilogram: PropTypes.number,
            calories: PropTypes.number
        })
    )
}

export default DailyActivityChart