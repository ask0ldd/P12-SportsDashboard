import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mocks/datas'
import VerticalMenu from './components/VerticalMenu'
import Greetings from './components/Greetings'

function App() {
  const [count, setCount] = useState(0)
  const userId = 0

  return (
    <div className="App">
      <Header></Header>
      <main>
        <VerticalMenu/>
        <section className='main-section'>
          <Greetings firstname={USER_MAIN_DATA[userId]?.userInfos?.firstName ? USER_MAIN_DATA[userId].userInfos?.firstName : 'N/A'}/>
        
          <div className='graphsnNutriDatas-container'>
            aaa
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
