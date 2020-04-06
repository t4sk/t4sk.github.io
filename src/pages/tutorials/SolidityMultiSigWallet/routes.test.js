import { getPrevHref, getNextHref } from "./routes"

const BASE_URL = "localhost:3000"
const LESSONS = [
  {
    path: "lesson-0",
  },
  {
    path: "lesson-1",
  },
  {
    path: "lesson-2",
  },
]

test("getPrevHref", () => {
  expect(getPrevHref(BASE_URL, LESSONS, 0)).toEqual(`${BASE_URL}`)

  expect(getPrevHref(BASE_URL, LESSONS, 1)).toEqual(
    `${BASE_URL}/${LESSONS[0].path}`
  )

  expect(getPrevHref(BASE_URL, LESSONS, 2)).toEqual(
    `${BASE_URL}/${LESSONS[1].path}`
  )
})

test("getNextHref", () => {
  expect(getNextHref(BASE_URL, LESSONS, 0)).toEqual(
    `${BASE_URL}/${LESSONS[1].path}`
  )

  expect(getNextHref(BASE_URL, LESSONS, 1)).toEqual(
    `${BASE_URL}/${LESSONS[2].path}`
  )

  expect(getNextHref(BASE_URL, LESSONS, 2)).toEqual(`${BASE_URL}`)
})
