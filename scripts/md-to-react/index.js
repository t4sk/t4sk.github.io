const assert = require("assert")
const fs = require("fs")
const path = require("path")
const util = require("util")
const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const marked = require("marked")
const metadata = require("../metadata")

const renderer = new marked.Renderer()

// replace img element with React component
renderer.image = function(src, _, alt) {
  return `<Image src={images["${src}"]} alt="${alt}"/>`
}

// open external links in new tab
renderer.link = function(href, title, text) {
  const re = new RegExp("^(http|https)://", "i")
  const match = re.test(href)

  if (re.test(href)) {
    return `<a href="${href}" target="__blank" rel="noopener noreferrer">${text}</a>`
  }

  return `<a href="${href}">${text}</a>`
}

// convert index.md to index.js
async function main() {
  const args = process.argv.slice(2)
  const dir = args[0]

  const md = (await readFile(path.join(dir, "index.md"))).toString()

  const [meta, content] = metadata.parse(md)

  const html = marked(content, { renderer })
    .replace(/&quot;/g, `"`)
    .replace(/\\/g, `\\\\`)
    .replace(/<br>/g, "<br/>")
    .replace(/<hr>/g, "<hr/>")

  const images = (await readdir(path.join(dir, "images"))).map(fileName => ({
    path: fileName,
    name: `img_${fileName.replace(".", "_")}`,
  }))

  const template = (await readFile(
    path.join(__dirname, "index.js.mustache")
  )).toString()

  const reactComponent = mustache.render(template, { html, images, meta })

  console.log(`Writing file to ${path.join(dir, "index.js")}`)
  writeFile(path.join(dir, "index.js"), reactComponent)

  const reactTest = (await readFile(
    path.join(__dirname, "index.test.js.mustache")
  )).toString()

  console.log(`Writing test file to ${path.join(dir, "index.test.js")}`)
  writeFile(path.join(dir, "index.test.js"), reactTest)
}

main()
