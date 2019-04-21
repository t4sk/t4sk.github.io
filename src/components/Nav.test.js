import React from "react"
import { shallow } from "enzyme"
import Nav from "./Nav"

const props = {
  lang: "en",
  location: {
    pathname: "/en",
  },
}

test("en", () => {
  const component = shallow(<Nav {...props} />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<Nav {...props} />)

  expect(component).toMatchSnapshot()
})
