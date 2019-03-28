const fs = require("fs")
const path = require("path")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const marked = require("marked")

// convert index.md -> index.js
async function main() {
  const args = process.argv.slice(2)
  const dir = args[0]

  const md = (await readFile(path.join(dir, "index.md"))).toString()

  const html = marked(md)
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)
    .replace(/<br>/g, "<br/>")

  const template = (await readFile(
    path.join(__dirname, "index.html.js.mustache")
  )).toString()

  const reactComponent = mustache.render(template, { html })

  console.log(`Writing file to ${path.join(dir, "index.html.js")}`)
  writeFile(path.join(dir, "index.html.js"), reactComponent)
}

main()
