import React from "react"
import { shallow } from "enzyme"
import About from "./index"

const props = {}

test("it renders", () => {
  const component = shallow(<About {...props} />)

  expect(component).toMatchSnapshot()
})
