import React from "react"
import PropTypes from "prop-types"
import styles from "./Courses.module.css"
import CourseCard from "./CourseCard"

import solidityLogo from "../../static/solidity.svg"
import solidityAppLogo from "../../static/solidity-app.svg"

const COURSES = [
  {
    title: "Learn Solidity",
    logo: solidityLogo,
    path: "/courses/learn-solidity",
    // TODO: remove onClick
    onClick: e => {
      e.preventDefault()
      alert("Coming soon...")
    },
  },
  {
    title: "Build a Multi-Sig Wallet in Solidity",
    logo: solidityAppLogo,
    path: "/courses/multi-sig-wallet",
    // TODO: remove onClick
    onClick: e => {},
  },
]

export function Courses(props) {
  return (
    <div className={styles.component}>
      {COURSES.map(course => (
        <div
          key={course.title}
          className={styles.card}
          onClick={course.onClick}
        >
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  )
}

Courses.propTypes = {}

export default Courses
