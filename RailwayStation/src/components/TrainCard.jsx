import styles from './TrainCard.module.css'

export const TrainCard = ({ train }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>{train.number}</span>
        <span className={styles.route}>{train.route}</span>
      </div>
      <div className={styles.details}>
        <p>Відправлення: {new Date(train.departureTime).toLocaleString('uk-UA')}</p>
        <p>В дорозі: {train.duration}</p>
      </div>
    </div>
  )
}