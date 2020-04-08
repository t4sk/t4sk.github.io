const fs = require("fs")
const util = require("util")
const path = require("path")
const readdir = util.promisify(fs.readdir)
const mdToHTML = require("./md-to-html")

function getExtension(file) {
  return file.split(".").slice(-1)[0]
}

async function main() {
  const args = process.argv.slice(2)
  const dir = args[0]

  const files = (await readdir(dir)).filter(file => getExtension(file) === "md")

  for (const file of files) {
    await mdToHTML(path.join(dir, file))
  }
}

main()
