import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"

const props = {
  lang: "en",
  location: {
    pathname: "/en",
  },
}

test("en", () => {
  const component = shallow(<Header {...props} />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<Header {...props} />)

  expect(component).toMatchSnapshot()
})
