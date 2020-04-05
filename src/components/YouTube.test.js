import React from "react"
import { shallow } from "enzyme"
import { YouTube, getUrl } from "./YouTube"

const props = {
  url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
  start: 123,
  end: 456,
}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<YouTube {...props} />)

  expect(component).toMatchSnapshot()
})

test("getUrl", () => {
  expect(getUrl(props)).toEqual(
    `https://www.youtube.com/embed/Dh7r6Ze-0Bs?start=123&end=456`
  )
})
