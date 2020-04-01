import React from "react"
import { shallow } from "enzyme"
import { Tutorials } from "./Tutorials"

const props = {}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<Tutorials {...props} />)

  expect(component).toMatchSnapshot()
})
