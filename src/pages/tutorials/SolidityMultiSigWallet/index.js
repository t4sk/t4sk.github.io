import React from "react"
import PropTypes from "prop-types"
import { Container, List, Image, Checkbox } from "semantic-ui-react"
import SEO from "../../../components/SEO"
import PageLayout from "../../../components/PageLayout"
import solidityAppLogo from "../../../static/solidity-app.svg"
import styles from "./index.module.css"
import lessons from "./lessons"

function Logo() {
  return (
    <Image
      src={solidityAppLogo}
      circular
      style={{ height: 50, width: 50, marginRight: 20 }}
    />
  )
}

export function SolidityMultiSigWallet(props) {
  // TODO checkbox
  const {
    match: { path, url },
  } = props

  return (
    <PageLayout>
      <SEO title="Build a Multi-Sig Wallet in Solidity | Smart Contract Programmer" />
      <Container>
        <div className={styles.component}>
          <h1 className={styles.header}>
            Build a Multi-Sig Wallet in Solidity
          </h1>

          <div className={styles.section}>
            <Logo />
            <div className={styles.lessons}>
              <h2>Solidity Contract</h2>
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
                        href={lesson.href || `${url}/${lesson.path}`}
                        {...(lesson.openNewTab ? { target: "__blank" } : {})}
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
        </div>
      </Container>
    </PageLayout>
  )
}

SolidityMultiSigWallet.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
}

export default SolidityMultiSigWallet
