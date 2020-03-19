import React from "react"
import { shallow } from "enzyme"
import { Courses } from "./Courses"

const props = {}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<Courses {...props} />)

  expect(component).toMatchSnapshot()
})
