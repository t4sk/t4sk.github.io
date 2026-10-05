import styles from "./Header.module.css"

const links = [
  { label: "X", text: "@ProgrammerSmart", href: "https://x.com/ProgrammerSmart" },
  {
    label: "Email",
    text: "smartcontractprogrammer@gmail.com",
    href: "mailto:smartcontractprogrammer@gmail.com",
  },
]

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>t4sk</h1>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.label} className={styles.item}>
            <span className={styles.label}>{link.label}</span>
            <a className={styles.link} href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
