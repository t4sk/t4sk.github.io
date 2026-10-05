import Section from "./Section"
import styles from "./Connect.module.css"

const links = [
  { label: "X", text: "@ProgrammerSmart", href: "https://x.com/ProgrammerSmart" },
  {
    label: "Email",
    text: "smartcontractprogrammer@gmail.com",
    href: "mailto:smartcontractprogrammer@gmail.com",
  },
]

function Connect() {
  return (
    <Section title="Connect">
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
    </Section>
  )
}

export default Connect