import React from "react"
import { shallow } from "enzyme"
import Home from "./index"

const props = {
  lang: "en",
}

test("en", () => {
  const component = shallow(<Home.En {...props} />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<Home.Jp {...props} lang="jp" />)

  expect(component).toMatchSnapshot()
})
