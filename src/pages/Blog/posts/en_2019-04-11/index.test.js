import React from "react"
import { shallow } from "enzyme"
import Post from "./index"

test("en", () => {
  const component = shallow(<Post />)

  expect(component).toMatchSnapshot()
})
