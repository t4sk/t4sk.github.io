const assert = require("assert")
const fs = require("fs")
const path = require("path")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const { removeExtension } = require("./lib")

module.exports = async function(dir, data) {
  const lessons = []

  for (const { file, metadata } of data) {
    const { icon, header, description, youTube } = metadata

    const variableName = `file_${removeExtension(file.replace(/-/g, "_"))}`

    lessons.push({
      variableName,
      importPath: `./${file}.js`,
      icon,
      header,
      description,
      youTube,
      path: removeExtension(file),
    })
  }

  const template = (await readFile(
    path.join(__dirname, "template", "chapter.js.mustache")
  )).toString()
  const js = mustache.render(template, {
    lessons,
  })

  writeFile(path.join(dir, `index.js`), js)

  console.log(`${path.join(dir, `index.js`)}`)
}
