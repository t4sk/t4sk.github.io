import chapter_00 from "./chapter-00"

export const BASE_URL = `${process.env.PUBLIC_URL}/tutorials/solidity-multi-sig-wallet`

const chapters = [
  {
    header: "Solidity Contract",
    lessons: chapter_00,
  },
  {
    header: "Truffle Contracts",
    lessons: chapter_00,
  },
]

export default chapters
