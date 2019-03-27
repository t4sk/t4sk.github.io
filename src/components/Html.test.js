import React from "react"
import { shallow } from "enzyme"
import Html from "./Html"

const props = {
  html: "<div>foo</div>",
}

test("it renders", () => {
  const component = shallow(<Html {...props} />)

  expect(component).toMatchSnapshot()
})
