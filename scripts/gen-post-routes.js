const fs = require("fs")
const path = require("path")
const util = require("util")
const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const marked = require("marked")
const moment = require("moment")

function sort(a, b) {
  // desc order
  return moment(b.date).unix() - moment(a.date).unix()
}

async function getPostDirs() {
  const postsDir = path.join(__dirname, "../src/pages/Blog/posts")
  return readdir(postsDir)
}

async function main() {
  const dirs = await getPostDirs()
}

main()
