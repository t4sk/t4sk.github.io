import React from "react"
import { shallow } from "enzyme"
import { LessonLayout } from "./LessonLayout"

const props = {
  title: "Multi-Sig Wallet",
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
          icon: "github",
          color: "",
          href: "https://github.com/t4sk/solidity-multi-sig-wallet",
          openNewTab: true,
          path: "",
          header: "Code",
        },
      ],
    },
  ],
  youTube: {
    url: "https://youtube.com",
    start: 1,
    end: 123,
  },
  html: "<p>foo bar</p>",
}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<LessonLayout {...props} />)

  expect(component).toMatchSnapshot()
})
