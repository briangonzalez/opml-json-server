const opmlToJSON = require('opml-to-json')
const fs = require('fs')

module.exports = (file) => {
  return new Promise((res, rej) => {
    try {
      const contents = fs.readFileSync(file, 'utf8')
      opmlToJSON(contents, (err, json) => {
        if (err) return rej()
        console.log(json);
        res(json)
      })
    } catch (error) {
      rej()
    }
  })
}
