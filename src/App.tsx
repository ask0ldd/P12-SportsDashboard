import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
