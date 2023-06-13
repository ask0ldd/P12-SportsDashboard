import { RadialBarChart, RadialBar, PolarAngleAxis, PieChart, ResponsiveContainer, Pie, Cell } from "recharts";
import '../styles/ScoreChart.css'

interface props {
    score : number
}

/**
 * Component displaying the score of the user.
 * @Component
 * @param {number} score - Performances.
 * @return ( <ScoreChart score={score}/> )
 */
const ScoreChart = ({score} : props) => {

    const datas = [{ score : score, fill: '#E60000' }] // fill as to be passed in the datas to set the color of the radialbar

    // the biggest value passed to a radialbar is set as 100% : full circle
    // here, there is only one value so 0.3 is considered to represent a full circle
    // or we want 0.3 to be 360 / 0.3 deg so we use a polarangleaxis to scale it, setting the max to 1
    return(
        /*<article>*/
            <ResponsiveContainer width="99%" height={263} className="scorechart-container"> 
                <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={datas} startAngle={90} /* start at the top */ endAngle={450} /* anticlockwise since the attribute is deprecated */ > 
                    <text x={12} y={14} fill="black" textAnchor="end" dominantBaseline="end">
                        <tspan x="58" y="34" fontWeight={500} fontSize="15">Score</tspan>
                    </text>
                    <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
                    <RadialBar
                    angleAxisId={0} 
                    background
                    dataKey="score"
                    cornerRadius={10}
                    />
                    <text x={0} y={0} fill="black" textAnchor="middle" dominantBaseline="central">
                        <tspan x="50%" y="42%" fontSize="26" fontWeight={600}>{datas[0].score ? datas[0].score*100 : 0}%</tspan>
                        <tspan x="50%" dy="1.54rem" fontSize="16" fill="#74798C">de votre</tspan>
                        <tspan x="50%" dy="1.4rem" fontSize="16" fill="#74798C">objectif</tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        /*</article>*/
        )
}

export default ScoreChart