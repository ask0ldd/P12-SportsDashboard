import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mocks/datas'
import VerticalMenu from './components/VerticalMenu/VerticalMenu'
import Greetings from './components/Greetings'
import NutriDatas from './components/NutriDatas/NutriDatas'
import DailyActivityChart from './components/DailyActivityChart'
import AvgSessionChart from './components/AvgSessionChart'
import PolarChart from './components/PolarChart'
import ScoreChart from './components/ScoreChart'
import PerformanceModel from './models/performancesModel'

function App() {
  const [count, setCount] = useState(0)
  const userId = 1

  const userDatas = new PerformanceModel(18)

  console.log(userDatas.avgSessions)

  return (
    <div className="App">
      <Header></Header>
      <main>
        <VerticalMenu/>
        <section className='main-section'>
          <Greetings firstname={userDatas.firstName ? userDatas.firstName : 'N/A'}/>
          <div className='graphsnNutriDatas-container'>
            <div className='graphs-container'>
              <DailyActivityChart userId={userId}/>
              <div className='graphsquares-container'>
                <AvgSessionChart avgSessions={userDatas.avgSessions}/>
                <PolarChart userId={userId}/>
                <ScoreChart score={userDatas.score ? userDatas.score : 0}/>
              </div>
            </div>
            <NutriDatas nutriDatas={userDatas.nutriDatas ? userDatas.nutriDatas : {calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0}}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
