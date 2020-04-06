import React from "react"
import LessonLayout from "../../../components/LessonLayout"
import { CHAPTERS, BASE_URL } from "./lib"
import { SOLIDITY_LESSONS } from "./lessons"

function createPage(lesson) {
  const { youTube, html } = lesson

  return props => (
    <LessonLayout
      title={"Build a Multi-Sig Wallet in Solidity"}
      baseUrl={BASE_URL}
      chapters={CHAPTERS}
      youTube={youTube}
      html={html}
    />
  )
}

const ROUTES = SOLIDITY_LESSONS.map(lesson => {
  return {
    path: `${BASE_URL}/${lesson.path}`,
    component: createPage(lesson),
  }
})

export default ROUTES
