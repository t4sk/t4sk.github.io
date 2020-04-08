function removeExtension(fileName) {
  return fileName
    .split(".")
    .slice(0, -1)
    .join("")
}

function getExtension(file) {
  return file.split(".").slice(-1)[0]
}

module.exports = {
  getExtension,
  removeExtension,
}
