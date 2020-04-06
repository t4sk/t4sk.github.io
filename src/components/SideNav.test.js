import React from "react"
import { shallow } from "enzyme"
import { SideNav } from "./SideNav"

const props = {
  baseUrl: "http://localhost:3000",
  chapters: [
    {
      header: "Solidity Contract",
      lessons: [
        {
          icon: "youtube",
          color: "red",
          href: "",
          path: "00-overview",
          header: "Intro",
          description: "",
        },
        {
          icon: "code",
          color: "",
          href: "",
          path: "01-constructor",
          header: "Constructor",
          description: "Exercise",
        },
        {
          icon: "github",
          color: "",
          href: "https://github.com/t4sk/solidity-multi-sig-wallet",
          openNewTab: true,
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
          color: "red",
          href: "",
          path: "00-overview",
          header: "Intro",
          description: "",
        },
        {
          icon: "code",
          color: "",
          href: "",
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
