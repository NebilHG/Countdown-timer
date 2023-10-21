import { useState } from 'react'
import './App.css'
import CountdownTimer from './components/timer/CountdownTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>interval App</h1>
      <div>
        <CountdownTimer/>
      </div>
      
    </>
  )
}

export default App
