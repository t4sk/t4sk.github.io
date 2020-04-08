const fs = require("fs")
const util = require("util")
const path = require("path")
const readdir = util.promisify(fs.readdir)
const mdToHTML = require("./md-to-html")
const createLessons = require("./create-lessons")
const { getExtension } = require("./lib")

async function main() {
  const args = process.argv.slice(2)
  const dir = args[0]

  const files = (await readdir(dir)).filter(file => getExtension(file) === "md")
  const data = []

  for (const file of files) {
    const { metadata } = await mdToHTML(path.join(dir, file))
    data.push({ file, metadata })
  }

  await createLessons(dir, data)
}

main()
