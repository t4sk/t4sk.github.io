import React from "react"
import PropTypes from "prop-types"
import styles from "./Tutorials.module.css"
import TutorialCard from "./TutorialCard"

import solidityLogo from "../../static/solidity.svg"
import solidityAppLogo from "../../static/solidity-app.svg"

const TUTORIALS = [
  {
    title: "Learn Solidity",
    logo: solidityLogo,
    path: "/tutorials/learn-solidity",
    // TODO: remove onClick
    onClick: e => {
      e.preventDefault()
      alert("Coming soon...")
    },
  },
  {
    title: "Build a Multi-Sig Wallet in Solidity",
    logo: solidityAppLogo,
    path: "/tutorials/build-a-multi-sig-wallet-in-solidity",
    // TODO: remove onClick
    onClick: e => {},
  },
]

export function Tutorials(props) {
  return (
    <div className={styles.component}>
      {TUTORIALS.map(course => (
        <div
          key={course.title}
          className={styles.card}
          onClick={course.onClick}
        >
          <TutorialCard {...course} />
        </div>
      ))}
    </div>
  )
}

Tutorials.propTypes = {}

export default Tutorials
