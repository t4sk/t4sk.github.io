import React from "react"
import LessonLayout from "../../../components/LessonLayout"
import chapters, { BASE_URL } from "./chapters"

const lessons = chapters.reduce((arr, { lessons }) => {
  arr.push(...lessons)
  return arr
}, [])

export function getPrevHref(baseUrl, lessons, i) {
  if (i <= 0) {
    return baseUrl
  }
  return `${baseUrl}/${lessons[i - 1].path}`
}

export function getNextHref(baseUrl, lessons, i) {
  if (i >= lessons.length - 1) {
    return baseUrl
  }
  return `${baseUrl}/${lessons[i + 1].path}`
}

function createPage(lesson, prevHref, nextHref) {
  const { youTube, html } = lesson

  return props => (
    <LessonLayout
      title={"Build a Multi-Sig Wallet in Solidity"}
      baseUrl={BASE_URL}
      chapters={chapters}
      youTube={youTube}
      html={html}
      prevHref={prevHref}
      nextHref={nextHref}
    />
  )
}

const routes = lessons.map((lesson, i) => {
  const prevHref = getPrevHref(BASE_URL, lessons, i)
  const nextHref = getNextHref(BASE_URL, lessons, i)

  return {
    path: `${BASE_URL}/${lesson.path}`,
    component: createPage(lesson, prevHref, nextHref),
  }
})

export default routes
