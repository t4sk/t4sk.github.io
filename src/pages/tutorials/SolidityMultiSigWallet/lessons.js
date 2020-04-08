import lesson_00_intro from "./lesson_00_intro.html"
import lesson_01_constructor_ex from "./lesson_01_constructor_ex.html"
import lesson_01_constructor_sol from "./lesson_01_constructor_sol.html"
import lesson_02_fallback_ex from "./lesson_02_fallback_ex.html"
import lesson_02_fallback_sol from "./lesson_02_fallback_sol.html"
import lesson_03_submit_transaction_ex from "./lesson_03_submit_transaction_ex.html"
import lesson_03_submit_transaction_sol from "./lesson_03_submit_transaction_sol.html"
import lesson_04_confirm_transaction_ex from "./lesson_04_confirm_transaction_ex.html"
import lesson_04_confirm_transaction_sol from "./lesson_04_confirm_transaction_sol.html"
import lesson_05_execute_transaction_ex from "./lesson_05_execute_transaction_ex.html"
import lesson_05_execute_transaction_sol from "./lesson_05_execute_transaction_sol.html"
import lesson_06_revoke_confirmation_ex from "./lesson_06_revoke_confirmation_ex.html"
import lesson_06_revoke_confirmation_sol from "./lesson_06_revoke_confirmation_sol.html"
import lesson_07_demo from "./lesson_07_demo.html"
import lesson_08_code from "./lesson_08_code.html"

// TODO generate this file from script
export const SOLIDITY_LESSONS = [
  {
    icon: "youtube",
    color: "red",
    path: "lesson-00-into",
    header: "Intro",
    description: "",
    youTube: {
      title: "Multi Sig Wallet",
      url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
      start: 0,
      end: 291,
    },
    html: lesson_00_intro,
  },
  {
    icon: "code",
    color: "",
    path: "lesson-01-constructor-exercise",
    header: "Constructor",
    description: "Exercise",
    html: lesson_01_constructor_ex,
  },
  {
    icon: "youtube",
    color: "red",
    path: "lesson-01-constructor-solution",
    header: "Constructor",
    description: "Solution",
    youTube: {
      title: "Multi Sig Wallet",
      url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
      start: 291,
      end: 382,
    },
    html: lesson_01_constructor_sol,
  },
  {
    icon: "code",
    color: "",
    path: "lesson-02-fallback-exercise",
    header: "Fallback",
    description: "Exercise",
    html: lesson_02_fallback_ex,
  },
  {
    icon: "youtube",
    color: "red",
    path: "lesson-02-fallback-solution",
    header: "Fallback",
    description: "Solution",
    youTube: {
      title: "Multi Sig Wallet",
      url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
      start: 689,
      end: 702,
    },
    html: lesson_02_fallback_sol,
  },
  {
    icon: "code",
    color: "",
    path: "lesson-03-submit-transaction-exercise",
    header: "Submit Transaction",
    description: "Exercise",
    html: lesson_03_submit_transaction_ex,
  },
  {
    icon: "youtube",
    color: "red",
    path: "lesson-03-submit-transaction-solution",
    header: "Submit Transaction",
    description: "Solution",
    youTube: {
      title: "Multi Sig Wallet",
      url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
      start: 382,
      end: 472,
    },
    html: lesson_03_submit_transaction_sol,
  },
  {
    icon: "code",
    color: "",
    path: "lesson-04-confirm-transaction-exercise",
    header: "Confirm Transaction",
    description: "Exercise",
    html: lesson_04_confirm_transaction_ex,
  },
  {
    icon: "youtube",
    color: "red",
    path: "lesson-04-confirm-transaction-solution",
    header: "Confirm Transaction",
    description: "Solution",
    youTube: {
      title: "Multi Sig Wallet",
      url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
      start: 472,
      end: 607,
    },
    html: lesson_04_confirm_transaction_sol,
  },
  {
    icon: "code",
    color: "",
    path: "lesson-05-execute-transaction-exercise",
    header: "Execute Transaction",
    description: "Exercise",
    html: lesson_05_execute_transaction_ex,
  },
  {
    icon: "youtube",
    color: "red",
    path: "lesson-05-execute-transaction-solution",
    header: "Execute Transaction",
    description: "Solution",
    youTube: {
      title: "Multi Sig Wallet",
      url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
      start: 607,
      end: 677,
    },
    html: lesson_05_execute_transaction_sol,
  },
  {
    icon: "code",
    color: "",
    path: "lesson-06-revoke-confirmation-exercise",
    header: "Revoke Confirmation",
    description: "Exercise",
    html: lesson_06_revoke_confirmation_ex,
  },
  {
    icon: "youtube",
    color: "red",
    path: "lesson-06-revoke-confirmation-solution",
    header: "Revoke Transaction",
    description: "Solution",
    html: lesson_06_revoke_confirmation_sol,
  },
  {
    icon: "youtube",
    color: "red",
    path: "lesson-07-demo",
    header: "Demo",
    description: "",
    youTube: {
      title: "Multi Sig Wallet",
      url: "https://www.youtube.com/embed/Dh7r6Ze-0Bs",
      start: 713,
    },
    html: lesson_07_demo,
  },
  {
    icon: "github",
    color: "",
    path: "lesson-08-code",
    header: "Code",
    html: lesson_08_code,
  },
]

export const SOLIDITY_LESSON_LINKS = SOLIDITY_LESSONS.map(
  ({ html, ...rest }) => rest
)
