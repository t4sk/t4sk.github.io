import React from "react"
import { shallow } from "enzyme"
import { SideNav } from "./SideNav"

const props = {
  match: {
    url: "http://localhost:3000",
  },
  baseUrl: "http://localhost:3000",
  chapters: [
    {
      header: "Solidity Contract",
      lessons: [
        {
          icon: "youtube",
          path: "00-overview",
          header: "Intro",
          description: "",
        },
        {
          icon: "code",
          path: "01-constructor",
          header: "Constructor",
          description: "Exercise",
        },
        {
          icon: "github",
          path: "",
          header: "Code",
        },
      ],
    },
    {
      header: "Truffle",
      lessons: [
        {
          icon: "youtube",
          path: "00-overview",
          header: "Intro",
          description: "",
        },
        {
          icon: "code",
          path: "01-constructor",
          header: "Constructor",
          description: "Exercise",
        },
      ],
    },
  ],
}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<SideNav {...props} />)

  expect(component).toMatchSnapshot()
})
