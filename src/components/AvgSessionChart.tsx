import '../styles/AvgSessionChart.css'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts'

interface session {
    day: string
    sessionLength: number
}

interface props {
    avgSessions : Array<session>
}

const CustomTooltip = ({payload} : any) => {
    if (payload && payload.length) {
        return (<div style={{backgroundColor:'#fff', color:'#000000', fontSize:'10px', padding:'4px 8px'}}>{payload[0].value} min</div>)
    }
}

const styleTitle = (value: string, entry: any) => {
    const twoPartsSentence = value.split('<br>')
    return (<div style={{fontSize:"15px", color:"#FF8484", marginTop:"-24px"}}>{twoPartsSentence[0]}<br/>{twoPartsSentence[1]}</div>)
}

const AvgSessionChart = ({avgSessions} : props) => {

    return(
    <ResponsiveContainer width="33%" height={260} className="sessionschart-container">
        <LineChart
        data={avgSessions}
        margin={{ top: 16, right: 24, bottom: 16, left: 24 }}
        >
            <XAxis dataKey="day"
            padding={{ left: 0, right: 0 }}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#FF8484' }}
            />
            <YAxis dataKey="sessionLength"
            padding={{ top: 0, bottom: 0 }}
            hide={true}
            domain={['dataMin-10', 'dataMax+10']}
            />
            <Line 
            type='natural' 
            dataKey="sessionLength" 
            stroke="#FF8484" /* !!! TODO LINEAR GRADIEN INSTEAD */
            strokeWidth={2}
            dot={false}
            />
            <Tooltip
            wrapperStyle={{outline:'none', border:'none'}}
            itemStyle={{color:'#000', fontSize:'10px'}}
            labelStyle={{color:'#000',display:'none'}}
            content={CustomTooltip}
            />
            <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{top:20, left:18, color:"#FF8484"}}
            iconSize={0}
            payload={[{ value : 'Durée moyenne<br>des sessions'}]}
            formatter={styleTitle}
            />
        </LineChart>
    </ResponsiveContainer>
    )
}

export default AvgSessionChart