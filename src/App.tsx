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
import { blankDailyActivities, blankNutridatas, blankPerformances, blankSessions } from './mocks/blankDatas'
import useAPI from './hooks/useAPI'
import { useEffect, useState } from 'react'
import { IPerformanceModel } from './models/performancesModel'

function App() {

  // const userId = 12
  const userId = 18

  const {mainDatas, userActivity, userSession, userPerformances, isLoading, isError} = useAPI(userId)
  
  const [userDatas, setUserDatas] = useState<IPerformanceModel>()

  //let userDatas

  /*if(mainDatas && userActivity && userSession && userPerformances && !isLoading && !isError) {
    console.log(mainDatas, userActivity, userSession, userPerformances, isLoading, isError )
    console.log('model')
    userDatas = new PerformanceModel(userId, {mainDatas, userActivity, userSession, userPerformances})
  }*/

  useEffect(()=> {
    if(mainDatas && userActivity && userSession && userPerformances && !isLoading && !isError) {
      console.log(mainDatas, userActivity, userSession, userPerformances, isLoading, isError )
      console.log('model')
      setUserDatas(new PerformanceModel(userId, {mainDatas, userActivity, userSession, userPerformances}))
    }
  }, [mainDatas, userActivity, userSession, userPerformances])

  return (
    <div className="App">
      <Header></Header>
      <main>
        <VerticalMenu/>
        <section className='main-section'>
          <Greetings firstname={userDatas?.firstName ? userDatas.firstName : 'N/A'}/>
          <div className='graphsnNutriDatas-container'>
            <div className='graphs-container'>
              <DailyActivityChart dailyDatas={userDatas?.dailyDatas ? userDatas.dailyDatas : blankDailyActivities}/>
              <div className='graphsquares-container'>
                <AvgSessionChart avgSessions={userDatas?.avgSessions ? userDatas.avgSessions : blankSessions}/>
                <PolarChart perfDatas={userDatas?.performanceDatas ? userDatas.performanceDatas : blankPerformances}/>
                <ScoreChart score={userDatas?.score ? userDatas.score : 0}/>
              </div>
            </div>
            <NutriDatas nutriDatas={userDatas?.nutriDatas ? userDatas.nutriDatas : blankNutridatas}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
