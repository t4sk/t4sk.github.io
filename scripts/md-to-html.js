const assert = require("assert")
const fs = require("fs")
const path = require("path")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const marked = require("marked")
const yaml = require("yaml")
const { removeExtension } = require("./lib")

function findIndexOfFrontMatter(lines) {
  assert(lines[0] === "---", "Front matter missing")

  // find front matter
  let i = 1
  while (i < lines.length && lines[i] !== "---") {
    i++
  }

  return i
}

function getMetadata(lines) {
  assert(lines[0] === "---", "Invalid front matter")
  assert(lines[lines.length - 1] === "---", "Invalid front matter")

  return yaml.parse(lines.slice(1, -1).join("\n"))
}

function parse(file) {
  const lines = file.split("\n")

  const i = findIndexOfFrontMatter(lines)

  const metadata = getMetadata(lines.slice(0, i + 1))
  const content = lines.slice(i + 1).join("\n")

  return {
    metadata,
    content,
  }
}

// NOTE: converts file.md -> file.html.js
async function mdToHTML(filePath) {
  const fileName = removeExtension(filePath.split("/").pop())
  const dir = filePath
    .split("/")
    .slice(0, -1)
    .join("/")

  const file = (await readFile(filePath)).toString()
  const { content, metadata } = parse(file)

  const html = marked(content)
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)

  // render markdown to html
  const jsTemplate = (await readFile(
    path.join(__dirname, "template", "md.js.mustache")
  )).toString()
  const js = mustache.render(jsTemplate, {
    html,
  })

  writeFile(path.join(dir, `${fileName}.md.js`), js)

  console.log(`${path.join(dir, `${fileName}.md.js`)}`)

  return {
    metadata,
  }
}

module.exports = mdToHTML
