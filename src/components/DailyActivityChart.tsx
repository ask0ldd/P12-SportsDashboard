import '../styles/DailyActivityChart.css'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts'
import { ISession } from '../types/modelTypes'

interface props {
    dailyDatas : Array<ISession>
}

const CustomXAxisTick = (value : number, index:number) : string => {
    return (value+1).toString()
}

const resizedLegendValue = (value: string, entry: any) => {
    return <span style={{fontSize:"14px", color:"#74798C", marginLeft:"8px"}}>{value}</span>
}

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
                    viewBox={{ x: 0, y: 0, width: 40, height: 65 }}
                    wrapperStyle={{backgroundColor:"#E60000", outline:"none", border:"none"}}
                    content={CustomTooltip}
                    cursor={{opacity:0.5}} /* grey active bar hover */
                    />
                    <text x={12} y={30} fill="#20253A" textAnchor="middle" dominantBaseline="central"> {/* titre graph */}
                        <tspan x="62" dy="0" fontSize="14">Activité quotidienne</tspan>
                    </text>
                    <CartesianGrid 
                    strokeDasharray="2 2"
                    vertical={false} /* only the horizontal lines of the grids are displayed */
                    stroke="#DEDEDE"
                    />
                    <XAxis 
                    tickLine={false}
                    width={1}
                    domain={['dataMin', 'dataMax']}
                    tickFormatter={CustomXAxisTick}
                    stroke="#DEDEDE"
                    tick={{ fill: '#9B9EAC' }}
                    tickMargin={16}
                    />
                    <YAxis 
                    yAxisId={0} /* id kg Axis */
                    dataKey="kilogram"
                    type="number"
                    domain={['dataMin-1', 'dataMax+2']} /* Y axis base value / max value */
                    tickCount={3} /* 3 values on Y weight axis */
                    tickLine={false} /* only numbers */
                    axisLine={false}
                    allowDecimals={false}
                    orientation="right"
                    tick={{ fill: '#9B9EAC' }}
                    />
                    <YAxis 
                    hide={true} /* don't need to be shown, only here to scale bars */
                    yAxisId={1} /* id calories Axis */
                    dataKey="calories"
                    type="number"
                    domain={['dataMin-100', 'dataMax+100']}
                    allowDecimals={false}
                    />
                    <Legend 
                    align="right"
                    verticalAlign='top'
                    width={290}
                    iconSize={8}
                    wrapperStyle={{top:8, right:24}}
                    payload={[{ value: 'Poids (kg)', type: 'circle', id: 'ID01', color: '#282D30'}, { value: 'Calories brûlées (kCal)', type: 'circle', id: 'ID02', color: '#E60000' }]}
                    formatter={resizedLegendValue}
                    />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[25, 25, 0, 0]}
                    yAxisId={0} /* linked to this specific Y axis, determines how the bar is scaled */
                    /> {/* barSize = bar width */}
                    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[25, 25, 0, 0]}
                    yAxisId={1}
                    />
                </BarChart>
            </ResponsiveContainer>
        </article>
    )
}

export default DailyActivityChart