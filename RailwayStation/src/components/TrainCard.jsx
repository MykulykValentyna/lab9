export const TrainCard = ({ train }) => {
  return (
    <div>
      <h3>{train.number}</h3>
      <p>{train.route}</p>
      <p>Відправлення: {new Date(train.departureTime).toLocaleString()}</p>
      <p>В дорозі: {train.duration}</p>
    </div>
  )
}