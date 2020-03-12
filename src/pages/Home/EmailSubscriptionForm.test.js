import React from "react"
import { shallow } from "enzyme"
import EmailSubscriptionForm from "./EmailSubscriptionForm"

const props = {}

test("it renders", () => {
  const component = shallow(<EmailSubscriptionForm {...props} />)

  expect(component).toMatchSnapshot()
})
