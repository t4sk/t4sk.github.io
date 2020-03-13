import React from "react"
import { shallow } from "enzyme"
import { CourseCard } from "./CourseCard"

const props = {
  title: "Learn Solidity",
  logo: "path/to/logo",
  href: "/courses/learn-solidity",
}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<CourseCard {...props} />)

  expect(component).toMatchSnapshot()
})
