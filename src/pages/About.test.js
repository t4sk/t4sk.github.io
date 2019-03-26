import React from "react"
import { shallow } from "enzyme"
import About from "./About"

test("it renders", () => {
  const component = shallow(<About />)

  expect(component).toMatchSnapshot()
})
