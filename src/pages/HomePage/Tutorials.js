import React from "react"
import PropTypes from "prop-types"
import styles from "./Tutorials.module.css"
import TutorialCard from "./TutorialCard"

import learnSolidityCardLogo from "../../static/learn-solidity-card.svg"

const COURSES = [
  {
    title: "Learn Solidity",
    logo: learnSolidityCardLogo,
    href: "/tutorials/learn-solidity",
  },
]

export function Tutorials(props) {
  return (
    <div className={styles.component}>
      {COURSES.map(course => (
        <TutorialCard key={course.title} {...course} />
      ))}
    </div>
  )
}

Tutorials.propTypes = {}

export default Tutorials
