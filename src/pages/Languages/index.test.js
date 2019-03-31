import React from "react"
import { shallow } from "enzyme"
import Languages from "./index"

const props = {
  lang: "en",
}

test("it renders", () => {
  const component = shallow(<Languages {...props} />)

  expect(component).toMatchSnapshot()
})
