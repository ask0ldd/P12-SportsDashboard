import './App.css'
import Header from './components/Header'
import VerticalMenu from './components/VerticalMenu/VerticalMenu'
import Greetings from './components/Greetings'
import NutriDatas from './components/NutriDatas/NutriDatas'
import DailyActivityChart from './components/DailyActivityChart'
import AvgSessionChart from './components/AvgSessionChart'
import PolarChart from './components/PolarChart'
import ScoreChart from './components/ScoreChart'
import PerformanceModel from './models/performancesModel'
import { blankNutridatas, blankSessions } from './mocks/blankDatas'

function App() {
  const userId = 1

  const userDatas = new PerformanceModel(18)

  return (
    <div className="App">
      <Header></Header>
      <main>
        <VerticalMenu/>
        <section className='main-section'>
          <Greetings firstname={userDatas.firstName ? userDatas.firstName : 'N/A'}/>
          <div className='graphsnNutriDatas-container'>
            <div className='graphs-container'>
              <DailyActivityChart dailyDatas={userDatas.dailyDatas}/>
              <div className='graphsquares-container'>
                <AvgSessionChart avgSessions={userDatas.avgSessions ? userDatas.avgSessions : blankSessions}/>
                <PolarChart userId={userId}/>
                <ScoreChart score={userDatas.score ? userDatas.score : 0}/>
              </div>
            </div>
            <NutriDatas nutriDatas={userDatas.nutriDatas ? userDatas.nutriDatas : blankNutridatas}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
