import reactLogo from "../../../static/react.svg"
import solidityLogo from "../../../static/solidity-app.svg"
import truffleLogo from "../../../static/truffle.svg"
import chapter_00 from "./chapter-00"
import chapter_01 from "./chapter-01"
import chapter_02 from "./chapter-02"
import chapter_03 from "./chapter-03"

export const BASE_URL = `${process.env.PUBLIC_URL}/courses/multi-sig-wallet`

const chapters = [
  {
    header: "Solidity Contract",
    logo: solidityLogo,
    lessons: chapter_00.map((lesson) => {
      return {
        ...lesson,
        path: `chapter-00/${lesson.path}`,
      }
    }),
  },
  {
    header: "Truffle",
    logo: truffleLogo,
    lessons: chapter_01.map((lesson) => {
      return {
        ...lesson,
        path: `chapter-01/${lesson.path}`,
      }
    }),
  },
  {
    header: "React TypeScript",
    logo: reactLogo,
    lessons: chapter_02.map((lesson) => {
      return {
        ...lesson,
        path: `chapter-02/${lesson.path}`,
      }
    }),
  },
  {
    header: "Deployment",
    logo: truffleLogo,
    lessons: chapter_03.map((lesson) => {
      return {
        ...lesson,
        path: `chapter-03/${lesson.path}`,
      }
    }),
  },
]

export default chapters

// https://www.youtube.com/watch?v=Tcu6WiD_YC0
// https://www.youtube.com/watch?v=D-y2XK3YABc
