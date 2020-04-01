import React from "react"
import PropTypes from "prop-types"
import { Card, Image } from "semantic-ui-react"
import styles from "./TutorialCard.module.css"

export function TutorialCard(props) {
  const { title, logo, path } = props

  // NOTE: use anchor instead of Link to reset scroll
  return (
    <a href={path}>
      <Card style={{ height: 500, width: 350 }}>
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
  path: PropTypes.string.isRequired,
}

export default TutorialCard
