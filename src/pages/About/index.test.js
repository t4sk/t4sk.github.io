import React from "react"
import { shallow } from "enzyme"
import About from "./index"

test("it renders", () => {
  const component = shallow(<About />)

  expect(component).toMatchSnapshot()
})
