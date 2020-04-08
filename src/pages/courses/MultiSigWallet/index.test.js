import React from "react"
import { shallow } from "enzyme"
import { MultiSigWallet } from "./index"

const props = {
  match: {
    url: "localhost:3000/tutorials/solidity-multi-sig-wallet",
  },
}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<MultiSigWallet {...props} />)

  expect(component).toMatchSnapshot()
})
