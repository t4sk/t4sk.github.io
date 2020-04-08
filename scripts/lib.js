function removeExtension(fileName) {
  return fileName
    .split(".")
    .slice(0, -1)
    .join("")
}

module.exports = {
  removeExtension,
}
