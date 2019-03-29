import React from "react"
import { shallow } from "enzyme"
import LanguageSVG from "./LanguageSVG"

test("it renders", () => {
  const component = shallow(<LanguageSVG />)

  expect(component).toMatchSnapshot()
})
