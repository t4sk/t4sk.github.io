import React from "react"
import PropTypes from "prop-types"
import { Container, List, Image } from "semantic-ui-react"
import SEO from "../../../components/SEO"
import PageLayout from "../../../components/PageLayout"
import solidityAppLogo from "../../../static/solidity-app.svg"
import styles from "./index.module.css"
import chapters from "./chapters"

// TODO fix css at 08-code
// TODO split youtube and upload
function Logo() {
  return (
    <Image
      src={solidityAppLogo}
      circular
      style={{ height: 50, width: 50, marginRight: 20 }}
    />
  )
}

export function MultiSigWallet(props) {
  // TODO checkbox
  const {
    match: { url },
  } = props

  return (
    <PageLayout>
      <SEO title="Build a Multi-Sig Wallet in Solidity | Smart Contract Programmer" />
      <Container>
        <div className={styles.component}>
          <h1 className={styles.header}>
            Build a Multi-Sig Wallet in Solidity
          </h1>

          {chapters.map(({ header, lessons }) => (
            <div className={styles.section} key={header}>
              <Logo />
              <div className={styles.lessons}>
                <h2>{header}</h2>
                <List divided relaxed selection>
                  {lessons.map((lesson, i) => (
                    <List.Item key={i}>
                      <List.Icon
                        name={lesson.icon}
                        color={lesson.icon === "youtube" ? "red" : "black"}
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header
                          as="a"
                          href={lesson.href || `${url}/${lesson.path}`}
                        >
                          {lesson.header}
                        </List.Header>
                        {lesson.description && (
                          <List.Description>
                            {lesson.description}
                          </List.Description>
                        )}
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageLayout>
  )
}

MultiSigWallet.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default MultiSigWallet
