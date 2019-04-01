// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require("babel-register")({
  presets: ["env", "react"],
})

const assert = require("assert")
const fs = require("fs")
const path = require("path")
const util = require("util")
const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const moment = require("moment")

const POSTS_PATH = path.join(__dirname, "../src/pages/Blog/posts")

function byDate(a, b) {
  // desc order
  return moment(b.date).unix() - moment(a.date).unix()
}

async function getPosts() {
  const dirs = await readdir(POSTS_PATH)

  return dirs
    .map(dir => {
      const [lang, date] = dir.split("_")
      const { title } = require(`${POSTS_PATH}/${dir}/index.js`)

      // check valid title, lang and date
      assert(!!title.trim(), `Undefined title ${title}`)
      assert(lang == "en" || lang == "jp", `Invalid lang ${lang} in ${dir}`)
      assert(moment(date).unix() > 0, `Invalid date ${date}`)

      return {
        lang,
        date,
        title,
        // relative to Blog
        path: `./posts/${dir}/index.js`,
      }
    })
    .sort(byDate)
}

async function main() {
  const posts = await getPosts()

  console.log(`Saving file to ${path.join(POSTS_PATH, "../posts.js")}`)

  const template = (await readFile(
    path.join(__dirname, "./posts.js.mustache")
  )).toString()

  const js = mustache.render(template, { posts })

  writeFile(path.join(POSTS_PATH, "../posts.js"), js)
}

main()
