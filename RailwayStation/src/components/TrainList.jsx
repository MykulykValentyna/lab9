import { TrainCard } from './TrainCard'

export const TrainList = ({ trains }) => {
  return (
    <div>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  )
}