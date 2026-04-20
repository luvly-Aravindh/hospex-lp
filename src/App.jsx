import { useState } from 'react'
import './App.css'
import HospexHero from './Components/HospexHero'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <HospexHero />
    </>
  )
}

export default App
