import React from "react"
import PostLayout from "../../PostLayout"
import Html from "./index.html.js"

export const title = "Solidity by Example - Part 0 - Setting Up MetaMask"
const lang = "en"

export default function(props) {
  return (
    <PostLayout title={title} lang={lang}>
      <Html />
    </PostLayout>
  )
}
