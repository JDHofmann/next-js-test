import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header />
        <h1 className={styles.title}>
          Welcome</h1>
    </div>
  )
}
