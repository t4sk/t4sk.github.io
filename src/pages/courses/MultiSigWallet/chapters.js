import solidityLogo from "../../../static/solidity-app.svg"
import truffleLogo from "../../../static/truffle.svg"
import chapter_00 from "./chapter-00"
import chapter_01 from "./chapter-01"

export const BASE_URL = `${process.env.PUBLIC_URL}/courses/multi-sig-wallet`

const chapters = [
  {
    header: "Solidity Contract",
    logo: solidityLogo,
    lessons: chapter_00.map(lesson => {
      return {
        ...lesson,
        path: `chapter-00/${lesson.path}`,
      }
    }),
  },
  {
    header: "Truffle",
    logo: truffleLogo,
    lessons: chapter_01.map(lesson => {
      return {
        ...lesson,
        path: `chapter-01/${lesson.path}`,
      }
    }),
  },
]

export default chapters
