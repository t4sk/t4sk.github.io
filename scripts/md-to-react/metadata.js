const assert = require("assert")
const moment = require("moment")

function getKeyValue(str) {
  const i = str.indexOf(":")

  assert(i != -1, `cannot find ":" for key value in metadata`)

  return [str.substring(0, i), str.substring(i + 1)]
}

const LANGUAGES = {
  en: true,
  jp: true,
}

function check(metadata) {
  const { title, lang, date } = metadata

  assert(title.length > 0, "empty title")
  assert(LANGUAGES[lang], `unknown language ${lang}`)
  assert(moment(date).unix() > 0, `invalid date ${date}`)
}

function parse(md) {
  const lines = md.split("\n")

  assert(lines[0] == "---", "missing metadata")

  const end = lines.slice(1).findIndex(l => l === "---") + 1
  assert(end > 0, `cannot find closing for metadata`)

  const header = lines.slice(1, end)

  assert(header.length > 0, `empty metadata`)

  const metadata = header.reduce((kv, line) => {
    const [key, val] = getKeyValue(line)

    kv[key] = val.trim()
    return kv
  }, {})

  check(metadata)

  return [metadata, lines.slice(end + 1).join("\n")]
}

module.exports = {
  parse,
}
