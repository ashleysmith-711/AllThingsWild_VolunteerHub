import styles from './Home.module.scss';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Volunteer Hub</h1>
      </div>
      <p className="constrict-content">Welcome to the demo version of the Volunteer Portal for All Things Wild, a wildlife rehabilitation center based in Georgetown, TX.</p>
    </main>
  )
}
