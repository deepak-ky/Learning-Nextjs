import Nav from './Nav'
import Header from './Header'
import styles from '../src/styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.constainer}>
        <main className={styles.main}>
            <Header/>
            {children}
        </main>
      </div>
    </>
  )
}

export default Layout
