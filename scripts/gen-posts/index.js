const assert = require("assert")
const fs = require("fs")
const path = require("path")
const util = require("util")
const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const mustache = require("mustache")
const moment = require("moment")
const metadata = require("../metadata")

const POSTS_PATH = path.join(__dirname, "../../src/pages/Blog/posts")

function byDate(a, b) {
  // desc order
  return moment(b.date).unix() - moment(a.date).unix()
}

async function getPosts() {
  const dirs = await readdir(POSTS_PATH)

  const posts = await Promise.all(
    dirs.map(async dir => {
      const [lang, date] = dir.split("_")

      const md = (await readFile(
        path.join(POSTS_PATH, dir, "index.md")
      )).toString()

      const [meta] = metadata.parse(md)

      // check lang and date matches
      assert(
        lang == meta.lang,
        `lang mismatch file: ${lang} metadata: ${meta.lang}`
      )
      assert(
        date == meta.date,
        `date mismatch file: ${date} metadata: ${meta.date}`
      )

      return {
        lang,
        date,
        title: meta.title,
        // relative to Blog
        path: `./posts/${dir}/index.js`,
        component: dir
          .replace(/-/g, "_")
          .replace("en", "En")
          .replace("jp", "Jp"),
      }
    })
  )

  return posts.sort(byDate)
}

async function main() {
  const posts = await getPosts()

  console.log(`Saving file to ${path.join(POSTS_PATH, "../Posts.js")}`)

  const template = (await readFile(
    path.join(__dirname, "./Posts.js.mustache")
  )).toString()

  const js = mustache.render(template, { posts })

  writeFile(path.join(POSTS_PATH, "../Posts.js"), js)
}

main()
