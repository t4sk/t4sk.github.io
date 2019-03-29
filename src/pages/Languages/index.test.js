import React from "react"
import { shallow } from "enzyme"
import Languages from "./index"

test("it renders", () => {
  const component = shallow(<Languages />)

  expect(component).toMatchSnapshot()
})
