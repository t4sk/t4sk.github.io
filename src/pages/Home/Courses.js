import React from "react"
import PropTypes from "prop-types"
import styles from "./Courses.module.css"
import CourseCard from "./CourseCard"

import learnSolidityCardLogo from "../../static/learn-solidity-card.svg"

const COURSES = [
  {
    title: "Learn Solidity",
    logo: learnSolidityCardLogo,
    href: "/courses/learn-solidity",
  },
]

export function Courses(props) {
  return (
    <div className={styles.component}>
      {COURSES.map(course => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  )
}

Courses.propTypes = {}

export default Courses
