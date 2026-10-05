import Section from "./Section"
import styles from "./Projects.module.css"

const projects = [
  {
    name: "txgraph.org",
    description: "EVM transaction visualizer",
    href: "https://txgraph.org",
  },
  {
    name: "Notes",
    description: "Notes about DeFi, ZK, algorithms and more",
    href: "https://github.com/t4sk/notes",
  },
  {
    name: "Hello Circom",
    description: "Circom examples",
    href: "https://github.com/t4sk/hello-circom",
  },
]

function Projects() {
  return (
    <Section title="Projects">
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.name} className={styles.item}>
            <a
              className={styles.link}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
            <span className={styles.description}>{project.description}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
