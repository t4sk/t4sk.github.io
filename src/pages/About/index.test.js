import React from "react"
import { shallow } from "enzyme"
import About from "./index"

const props = {
  lang: "en",
}

test("en", () => {
  const component = shallow(<About {...props} />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<About {...props} lang="jp" />)

  expect(component).toMatchSnapshot()
})
