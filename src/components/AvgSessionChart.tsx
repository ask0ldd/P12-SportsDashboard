import '../styles/AvgSessionChart.css'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts'
import { ISessionAvgDayString } from '../types/modelTypes'

interface props {
    avgSessions : Array<ISessionAvgDayString>
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

/**
 * Component showing the average session chart for a specific user.
 * @Component
 * @param  {Array<ISessionAvgDayString>} avgSessions Sessions duration in by week day
 * @return ( <AvgSessionChart avgSessions={avgSessions}/> )
 */

const AvgSessionChart = ({avgSessions} : props) => {

    const onMouseMove = (hoveredData : any) => { // any > needs better typing

        if (hoveredData && hoveredData.activePayload && avgSessions && avgSessions?.length > 0) {
            const x = hoveredData.activeCoordinate.x
            const postTooltipBG = document.querySelector('#postTooltipBG')
            postTooltipBG?.setAttribute("x", x+'px') // x coordinates of the active tick on the x axis
            postTooltipBG?.setAttribute("width", `calc(100% - ${x}px)`) // length = 100% - part from the start to the active tick on the x axis
        }
    }
    
    const onMouseOut = () => {
        const postTooltipBG = document.querySelector('#postTooltipBG')
        postTooltipBG?.setAttribute("width", "0%")
    }

    return(
        /* 99% and fixed height or difficulties to resize with parent */ /* Soutenance : Gradient */
        <ResponsiveContainer width="99%" height={263} className="sessionschart-container"> 
            <LineChart
            data={avgSessions}
            margin={{ top: 16, right: 24, bottom: 16, left: 24 }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseOut}
            >
                <defs> {/* Soutenance : Gradient */}
                    <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.7} />
                    </linearGradient>
                </defs>
                <rect id="postTooltipBG" x="9%" width="14%" height="100%" opacity="0.2" /* DARK BG AFTER TOOLTIP */
                />
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
                stroke="url(#colorUv)" /* Soutenance : Gradient */
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