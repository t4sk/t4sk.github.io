import React from "react"
import PropTypes from "prop-types"
import { List } from "semantic-ui-react"
import styles from "./SideNav.module.css"

export function SideNav(props) {
  const { baseUrl, chapters } = props

  // TODO active
  // TODO link back to base url

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
                    <List.Header
                      as="a"
                      href={lesson.href || `${baseUrl}/${lesson.path}`}
                      {...(lesson.openNewTab ? { target: "__blank" } : {})}
                    >
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
          href: PropTypes.string,
          path: PropTypes.string,
          openNewTab: PropTypes.bool,
          header: PropTypes.string.isRequired,
          description: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default SideNav
