import '../styles/DailyActivity.css'
import {USER_ACTIVITY} from '../mocks/datas'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts'

interface props {
    userId : number
}

const DailyActivity = ({userId} : props) => {

    const dailyDatas = [...USER_ACTIVITY[userId].sessions]
    console.log(dailyDatas)

    return(
        <article className='dailyactivities-container'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={dailyDatas}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}>
                    <CartesianGrid 
                    strokeDasharray="3 3"
                    vertical={false} /* only the horizontal lines of the grids are displayed */
                    />
                    <XAxis />
                    <YAxis 
                    yAxisId={0} /* id kg Axis */
                    dataKey="kilogram"
                    domain={['dataMin-1', 'dataMax+2']} /* Y axis base value / max value */
                    tickCount={3} /* 3 values on Y weight axis */
                    />
                    <YAxis 
                    hide={true} /* don't need to be shown, only here to scale bars */
                    yAxisId={1} /* id calories Axis */
                    dataKey="calories"
                    domain={['dataMin-100', 'dataMax+100']}
                    />
                    <Tooltip />
                    <Legend />
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

export default DailyActivity