const { toHTML } = require("./template/lib")

async function main() {
  const args = process.argv.slice(2)
  const filePath = args[0]

  await toHTML(filePath)
}

main()
