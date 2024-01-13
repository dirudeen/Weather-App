import { useEffect } from 'react'
import './App.css'
import { fetchCurrrentWeatherCondition } from './apis'

function App() {

useEffect(() => {
  const getWeatherConditions = async () => {
    const data = await fetchCurrrentWeatherCondition()
    console.log(data)
  }

  getWeatherConditions()
}, [])


  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default App
