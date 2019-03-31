import React from "react"
import { shallow } from "enzyme"
import Blog from "./index"

test("it renders", () => {
  const component = shallow(<Blog />)

  expect(component).toMatchSnapshot()
})
