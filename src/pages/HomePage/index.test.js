import React from "react"
import { shallow } from "enzyme"
import Home from "./index"

const props = {}

test("it renders", () => {
  const component = shallow(<Home {...props} />)

  expect(component).toMatchSnapshot()
})
