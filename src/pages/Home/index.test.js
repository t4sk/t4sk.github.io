import React from "react"
import { shallow } from "enzyme"
import Home from "./index"

const props = {
  lang: "en",
}

test("en", () => {
  const component = shallow(<Home {...props} />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<Home {...props} lang="jp" />)

  expect(component).toMatchSnapshot()
})
