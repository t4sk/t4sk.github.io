export default function translate(map, lang, key) {
  const val = map[lang][key]

  if (!val) {
    throw new Error(`Undefined translation key: ${key}, lang: ${lang}`)
  }

  return val
}
