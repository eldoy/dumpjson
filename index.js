const fs = require('fs')
const path = require('path')

module.exports = function (name) {
  if (/^\w/.test(name)) {
    name = path.join(process.cwd(), name)
  }
  const writer = fs.createWriteStream(name, { flags: 'a' })

  let first = true
  function write(obj) {
    if (first) {
      writer.write('[\n')
    }
    const line = JSON.stringify(obj)
    writer.write(`${first ? '' : ',\n'}  ${line}`)
    first = false
  }

  function end() {
    return new Promise(function (resolve) {
      writer.on('finish', resolve)
      writer.write('\n]')
      writer.end('')
    })
  }

  return { write, end }
}
