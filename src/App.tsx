import Header from "./components/Header"
import Projects from "./components/Projects"
import AuditContests from "./components/AuditContests"
import styles from "./App.module.css"

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Projects />
      <AuditContests />
    </main>
  )
}

export default App
