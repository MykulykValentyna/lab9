import { useState, useEffect } from 'react'
import { TrainList } from '../components/TrainList'
import styles from './Home.module.css'

export const Home = () => {
  const [trains, setTrains] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/trains')
      .then(res => res.json())
      .then(data => setTrains(data))
  }, [])

  const filteredTrains = trains.filter(train => 
    train.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.number.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Розклад потягів</h2>
      <input 
        type="text" 
        className={styles.searchInput}
        placeholder="Пошук за маршрутом або номером..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TrainList trains={filteredTrains} />
    </div>
  )
}