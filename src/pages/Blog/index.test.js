import React from "react"
import { shallow } from "enzyme"
import Blog, { groupByYear } from "./index"

const props = {
  lang: "en",
}

test("en", () => {
  const component = shallow(<Blog lang="en" />)

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(<Blog lang="jp" />)

  expect(component).toMatchSnapshot()
})

test("groupByYear", () => {
  expect(groupByYear(POSTS)).toEqual({
    years: ["2019", "2018", "2017"],
    byYear: {
      "2019": [POSTS[0], POSTS[1]],
      "2018": [POSTS[2], POSTS[3], POSTS[4]],
      "2017": [POSTS[5]],
    },
  })
})

const POSTS = [
  {
    title: "Introduction to Ethereum Payment Channels Video",
    date: "2019-01-03",
    lang: "en",
  },
  {
    title: "Implementing Harberger Tax Deeds",
    date: "2019-01-02",
    lang: "en",
  },
  {
    title: "Writing a Dollar Auction Contract",
    date: "2018-10-11",
    lang: "en",
  },
  {
    title: "Writing a Penny Auction Contract",
    date: "2018-10-10",
    lang: "en",
  },
  {
    title: "Contracts Calling Arbitrary Functions",
    date: "2018-10-01",
    lang: "en",
  },
  {
    title: "Testing and Deploying Smart Contracts with Remix",
    date: "2017-12-12",
    lang: "en",
  },
]
