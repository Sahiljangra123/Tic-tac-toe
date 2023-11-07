import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Web-Games</h1>
      <h3>Select a Game to Play</h3>
      <p><Link href='./Tic-Tac-Toe'><a>Tic-Tac-Toe</a></Link></p>
      
    </div>
  )
}
