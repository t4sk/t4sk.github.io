import React from "react"
import { shallow } from "enzyme"
import { TutorialCard } from "./TutorialCard"

const props = {
  title: "Learn Solidity",
  logo: "path/to/logo",
  path: "/tutorials/learn-solidity",
}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<TutorialCard {...props} />)

  expect(component).toMatchSnapshot()
})
