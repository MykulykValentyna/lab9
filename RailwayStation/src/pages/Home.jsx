import { useState, useEffect } from 'react'
import { TrainList } from '../components/TrainList'

export const Home = () => {
  const [trains, setTrains] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/trains')
      .then(res => res.json())
      .then(data => setTrains(data))
  }, [])

  return (
    <div>
      <h2>Розклад потягів</h2>
      <TrainList trains={trains} />
    </div>
  )
}