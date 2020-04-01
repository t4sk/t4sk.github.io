import React from "react"
import PropTypes from "prop-types"
import { Container, List, Image, Checkbox } from "semantic-ui-react"
import SEO from "../../../components/SEO"
import PageLayout from "../../../components/PageLayout"
import solidityAppLogo from "../../../static/solidity-app.svg"
import styles from "./index.module.css"

function Logo() {
  return (
    <Image
      src={solidityAppLogo}
      circular
      style={{ height: 50, width: 50, marginRight: 20 }}
    />
  )
}

const LESSONS = [
  {
    icon: "youtube",
    color: "red",
    href: "",
    path: "overview",
    header: "Overview",
    description: "",
  },
  {
    icon: "code",
    color: "",
    href: "",
    path: "00-constructor",
    header: "Constructor",
    description: "Exercise",
  },
  {
    icon: "code",
    color: "",
    href: "",
    path: "01-fallback",
    header: "Fallback",
    description: "Exercise",
  },
  {
    icon: "code",
    color: "",
    href: "",
    path: "02-submit-transaction",
    header: "Submit Transaction",
    description: "Exercise",
  },
  {
    icon: "code",
    color: "",
    href: "",
    path: "03-confirm-transaction",
    header: "Confirm Transaction",
    description: "Exercise",
  },
  {
    icon: "code",
    color: "",
    href: "",
    path: "04-execute-transaction",
    header: "Execute Transaction",
    description: "Exercise",
  },
  {
    icon: "code",
    color: "",
    href: "",
    path: "05-revoke-transaction",
    header: "Revoke Transaction",
    description: "Exercise",
  },
  {
    icon: "github",
    color: "",
    href: "https://github.com/t4sk/solidity-multi-sig-wallet",
    openNewTab: true,
    path: "",
    header: "Code",
  },
]

export function SolidityMultiSigWallet(props) {
  // TODO checkbox
  const {
    match: { path },
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
                {LESSONS.map((lesson, i) => (
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
                        href={lesson.href || `${path}/${lesson.path}`}
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
