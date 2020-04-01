import React from "react"
import PropTypes from "prop-types"
import { Card, Image } from "semantic-ui-react"
import styles from "./TutorialCard.module.css"

export function TutorialCard(props) {
  const { title, logo, href } = props

  return (
    <a href={href}>
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

TutorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default TutorialCard
