import Header from "./components/Header"
import Projects from "./components/Projects"
import Connect from "./components/Connect"
import styles from "./App.module.css"

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Connect />
      <Projects />
    </main>
  )
}

export default App
