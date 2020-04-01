import React from "react"
import { shallow } from "enzyme"
import { SolidityMultiSigWallet } from "./index"

const props = {
  match: {
    path: "/tutorials/solidity-multi-sig-wallet",
  },
}

beforeEach(() => {})

test("it renders", () => {
  const component = shallow(<SolidityMultiSigWallet {...props} />)

  expect(component).toMatchSnapshot()
})
