import styles from '../src/styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={styles.title}>
            <span>Versache</span> News
        </h1>
        <p className={styles.description} >News doesn't stop. Why should we?</p>
    </div>
  )
}

export default Header