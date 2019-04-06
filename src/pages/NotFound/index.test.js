import React from "react"
import { shallow } from "enzyme"
import NotFound from "./index"

const props = {
  location: {
    pathname: "/en",
  },
}

test("en", () => {
  const component = shallow(
    <NotFound
      {...props}
      location={{
        pathname: "/en/not/found",
      }}
    />
  )

  expect(component).toMatchSnapshot()
})

test("jp", () => {
  const component = shallow(
    <NotFound
      {...props}
      location={{
        pathname: "/jp/not/found",
      }}
    />
  )

  expect(component).toMatchSnapshot()
})

test("not en nor jp", () => {
  const component = shallow(
    <NotFound
      {...props}
      location={{
        pathname: "/not/found",
      }}
    />
  )

  expect(component).toMatchSnapshot()
})
