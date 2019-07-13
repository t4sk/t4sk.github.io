import React from "react"
import { shallow } from "enzyme"
import Nav from "./Nav"

const props = {}

test("it renders", () => {
  const component = shallow(<Nav {...props} />)

  expect(component).toMatchSnapshot()
})
