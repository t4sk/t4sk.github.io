import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { List, Divider, Icon } from "semantic-ui-react"
import styles from "./SideNav.module.css"

export function SideNav(props) {
  const {
    match: { url },
    baseUrl,
    chapters,
  } = props

  // NOTE: using Link does not load highlight.js so he use anchor to navigate
  // TODO FIX - use react router, load syntax highlight, reset scroll by document.getElementById("root").scrollTo(0, 0)

  return (
    <div className={styles.component}>
      <div className={styles.sideNav}>
        {chapters.map(({ header, lessons }) => (
          <div key={header}>
            <a className={styles.overviewLink} href={baseUrl}>
              <Icon name="chevron left" />
              <div>Coarse Overview</div>
            </a>
            <Divider />
            <h2>{header}</h2>
            <List divided relaxed selection>
              {lessons.map((lesson, i) => {
                const href = `${baseUrl}/${lesson.path}`
                const active = href === url

                return (
                  <List.Item key={i} active={active}>
                    <List.Icon
                      name={lesson.icon}
                      {...(lesson.color ? { color: lesson.color } : {})}
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="a" href={href}>
                        {lesson.header}
                      </List.Header>
                      {lesson.description && (
                        <List.Description>
                          {lesson.description}
                        </List.Description>
                      )}
                    </List.Content>
                  </List.Item>
                )
              })}
            </List>
          </div>
        ))}
      </div>
    </div>
  )
}

SideNav.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
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

export default withRouter(SideNav)
