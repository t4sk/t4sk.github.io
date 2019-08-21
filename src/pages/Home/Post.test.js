import React from "react"
import { shallow } from "enzyme"
import Post from "./Post"

const props = {
  thumbnailUrl:
    "https://i.ytimg.com/vi/hMwdd664_iw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZXbU3wGs1vpsnWX06BEHw9TookQ",
  youTubeUrl: "https://www.youtube.com/watch?v=hMwdd664_iw",
  title: "Learn Solidity - Hello World",
  createdAt: "2019-08-20",
}

test("it renders", () => {
  const component = shallow(<Post {...props} />)

  expect(component).toMatchSnapshot()
})
