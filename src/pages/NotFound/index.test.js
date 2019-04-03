import React from "react"
import { shallow } from "enzyme"
import NotFound from "./index"

const props = {}

test("it renders", () => {
  const component = shallow(<NotFound {...props} />)

  expect(component).toMatchSnapshot()
})
