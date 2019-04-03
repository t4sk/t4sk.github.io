import React from "react"
import { shallow } from "enzyme"
import Contact from "./index"

const props = {
  lang: "en",
}

test("en", () => {
  const component = shallow(<Contact {...props} />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<Contact {...props} lang="jp" />)

  expect(component).toMatchSnapshot()
})
