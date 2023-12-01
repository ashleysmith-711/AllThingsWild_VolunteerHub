import styles from './Home.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <div className={`${styles.h1Container} constrict-content`}>
          <h1>Volunteer Hub</h1>
        </div>
      </div>
      <div className={`${styles.intro} constrict-content`}>
        <p>Welcome to the Volunteer Portal for All Things Wild, a wildlife rehabilitation center in Georgetown, TX. Here you can view the schedule of volunteers, view your upcoming shifts and sign up to volunteer.</p>
        <div className={styles.buttonContainer}>
          <a href="/schedule" className='fake-button'>View Schedule</a>
          <a href="/signup" className='fake-button'>Sign Up</a>
        </div>
      </div>
    </main>
  )
}
