import Section from "./Section"
import styles from "./Projects.module.css"

const projects = [
  {
    name: "txgraph",
    description: "EVM transaction visualizer",
    href: "https://txgraph.org",
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
