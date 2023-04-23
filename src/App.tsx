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

function App() {
  const [count, setCount] = useState(0)
  const userId = 1

  return (
    <div className="App">
      <Header></Header>
      <main>
        <VerticalMenu/>
        <section className='main-section'>
          <Greetings firstname={USER_MAIN_DATA[userId]?.userInfos?.firstName ? USER_MAIN_DATA[userId].userInfos?.firstName : 'N/A'}/>
          <div className='graphsnNutriDatas-container'>
            <div className='graphs-container'>
              <DailyActivityChart userId={userId}/>
              <div className='graphsquares-container'>
                <AvgSessionChart userId={userId}/>
                <PolarChart userId={userId}/>
                <AvgSessionChart userId={userId}/>
              </div>
            </div>
            <NutriDatas userId={0}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
