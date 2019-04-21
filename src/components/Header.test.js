import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"

test("it renders", () => {
  const component = shallow(<Header>Header Goes Here</Header>)

  expect(component).toMatchSnapshot()
})
