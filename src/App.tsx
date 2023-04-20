import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mocks/datas'
import VerticalMenu from './components/VerticalMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <main>
        <VerticalMenu/>
        <section className='main-section'>
          <div className='graphsSubSection'>
            <div className='textnGraphsContainer'>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
