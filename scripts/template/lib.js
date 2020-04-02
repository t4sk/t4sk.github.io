const fs = require("fs")
const path = require("path")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const mustache = require("mustache")
const marked = require("marked")

function removeExt(fileName) {
  return fileName
    .split(".")
    .slice(0, -1)
    .join("")
}

// NOTE: converts file.md -> file.html.js
async function toHTML(filePath) {
  const fileName = removeExt(filePath.split("/").pop())
  const dir = filePath
    .split("/")
    .slice(0, -1)
    .join("/")

  const markdown = (await readFile(filePath)).toString()
  const html = marked(markdown)
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)

  // render markdown to html
  const jsTemplate = (await readFile(
    path.join(__dirname, "template.html.js.mustache")
  )).toString()
  const js = mustache.render(jsTemplate, { html })

  console.log(`Writing file to ${path.join(dir, `${fileName}.html.js`)}`)
  writeFile(path.join(dir, `${fileName}.html.js`), js)
}

module.exports = {
  toHTML,
}
