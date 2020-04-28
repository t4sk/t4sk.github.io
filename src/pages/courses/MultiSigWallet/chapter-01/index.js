import file_00_setup from "./00-setup.md.js"
import file_01_testing from "./01-testing.md.js"
import file_02_migration from "./02-migration.md.js"

export default [
    {
      icon: "youtube",
      path: "00-setup",
      header: "Setup",
      description: "",
      youTube: {
          title: "Truffle Setup - Multi Sig Wallet",
          url: "https://www.youtube-nocookie.com/embed/8fPcQIPNfG8",
      },
      html: file_00_setup
    },
    {
      icon: "youtube",
      path: "01-testing",
      header: "Testing",
      description: "",
      youTube: {
          title: "Truffle Testing - Multi Sig Wallet",
          url: "https://www.youtube-nocookie.com/embed/XFQgY-lNNlE",
      },
      html: file_01_testing
    },
    {
      icon: "youtube",
      path: "02-migration",
      header: "Migration",
      description: "",
      youTube: {
          title: "Truffle Migration - Multi Sig Wallet",
          url: "https://www.youtube-nocookie.com/embed/36k8XT2u6G4",
      },
      html: file_02_migration
    },
]