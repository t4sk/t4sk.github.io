import React from "react"
import { shallow } from "enzyme"
import About from "./index"

const props = {
  lang: "en",
}

test("en", () => {
  const component = shallow(<About.En {...props} />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<About.Jp {...props} lang="jp" />)

  expect(component).toMatchSnapshot()
})
