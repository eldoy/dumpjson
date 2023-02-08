const assert = require('assert')
const jsondump = require('../index.js')
const path = require('path')
const fs = require('fs')
const data = require('./data.json')

const name = 'file.json'

async function main() {
  const file = path.join(process.cwd(), 'test', name)
  fs.truncateSync(file, 0)
  const writer = jsondump(file)
  for (const item of data) {
    writer.write(item)
  }
  await writer.end()

  const result = require(file)
  assert.deepEqual(result, data)
}
main()
