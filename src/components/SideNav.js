import React from "react"
import PropTypes from "prop-types"
import { List } from "semantic-ui-react"
import styles from "./SideNav.module.css"

export function SideNav(props) {
  const { baseUrl, chapters } = props

  // TODO active
  // NOTE: using Link does not load highlight.js so he use anchor to navigate
  // TODO FIX - use react router, load syntax highlight, reset scroll by document.getElementById("root").scrollTo(0, 0)
  return (
    <div className={styles.component}>
      <div className={styles.sideNav}>
        {chapters.map(({ header, lessons }) => (
          <div key={header}>
            <h2>{header}</h2>
            <List divided relaxed selection>
              {lessons.map((lesson, i) => (
                <List.Item key={i}>
                  <List.Icon
                    name={lesson.icon}
                    {...(lesson.color ? { color: lesson.color } : {})}
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a" href={`${baseUrl}/${lesson.path}`}>
                      {lesson.header}
                    </List.Header>
                    {lesson.description && (
                      <List.Description>{lesson.description}</List.Description>
                    )}
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
        ))}
      </div>
    </div>
  )
}

SideNav.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      lessons: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          color: PropTypes.string,
          path: PropTypes.string,
          header: PropTypes.string.isRequired,
          description: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default SideNav
