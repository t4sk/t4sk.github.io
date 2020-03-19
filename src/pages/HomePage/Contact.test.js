import React from "react"
import { shallow } from "enzyme"
import { Contact } from "./Contact"

const props = {}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<Contact {...props} />)

  expect(component).toMatchSnapshot()
})
