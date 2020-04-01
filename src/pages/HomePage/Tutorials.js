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
    // TODO: remove onClick
    onClick: e => {
      e.preventDefault()
      alert("Coming soon...")
    },
  },
]

export function Tutorials(props) {
  return (
    <div className={styles.component}>
      {COURSES.map(course => (
        <div onClick={course.onClick}>
          <TutorialCard key={course.title} {...course} />
        </div>
      ))}
    </div>
  )
}

Tutorials.propTypes = {}

export default Tutorials
