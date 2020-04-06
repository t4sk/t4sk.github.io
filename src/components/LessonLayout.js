import React from "react"
import PropTypes from "prop-types"
import { Icon, Button, Container } from "semantic-ui-react"
import SEO from "./SEO"
import PageLayout from "./PageLayout"
import Html from "./Html"
import YouTube from "./YouTube"
import SideNav from "./SideNav"
import styles from "./LessonLayout.module.css"

export function LessonLayout(props) {
  const { title, baseUrl, chapters, youTube, html } = props

  // TODO back, next buttons

  return (
    <PageLayout>
      <SEO title={`${title} | Smart Contract Programmer`} />
      <div className={styles.component}>
        <div className={styles.row}>
          <SideNav baseUrl={baseUrl} chapters={chapters} />
          <div className={styles.main}>
            <Container>
              <div className={styles.youTube}>
                {youTube && <YouTube {...youTube} />}
              </div>

              <Html html={html} />

              <div className={styles.buttons}>
                <Button animated size="huge">
                  <Button.Content visible>Back</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow left" />
                  </Button.Content>
                </Button>
                <Button animated size="huge">
                  <Button.Content visible>Next</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

LessonLayout.propTypes = {
  title: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      lessons: PropTypes.array.isRequired,
    })
  ).isRequired,
  youTube: PropTypes.object,
  html: PropTypes.string.isRequired,
}

export default LessonLayout
