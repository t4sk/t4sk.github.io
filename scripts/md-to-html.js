const assert = require("assert")
const fs = require("fs")
const path = require("path")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const marked = require("marked")
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

  // NOTE: store in array so it can be looped inside mustache
  const metadata = []

  for (let i = 1; i < lines.length - 1; i++) {
    const line = lines[i]
    const j = line.indexOf(":")
    const key = line.slice(0, j)
    const val = line.slice(j + 1).trim()

    metadata.push({
      key,
      val,
    })
  }

  return metadata
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
    metadata,
  })

  writeFile(path.join(dir, `${fileName}.md.js`), js)

  console.log(`${path.join(dir, `${fileName}.md.js`)}`)
}

module.exports = mdToHTML
