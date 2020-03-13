import React from "react"
import PropTypes from "prop-types"
import { Card, Image } from "semantic-ui-react"
import styles from "./CourseCard.module.css"

export function CourseCard(props) {
  const { title, logo, href } = props

  return (
    <a
      href={href}
      onClick={e => {
        e.preventDefault()
        alert("Coming soon")
      }}
    >
      <Card>
        <Image src={logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <div className={styles.title}>{title}</div>
          </Card.Header>
        </Card.Content>
      </Card>
    </a>
  )
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default CourseCard
