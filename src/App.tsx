import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <main>
        <section>
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
