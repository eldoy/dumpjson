# JSONDump

Dump large Javascript arrays to JSON file without using too much memory.

If you're looking for a way to read from JSON file into memory, check out [jsonstrom.](https://github.com/eldoy/jsonstrom)

### Install

```
npm i jsondump
```

### Usage

```js
const jsondump = require('jsondump')

// Filename to dump to
const writer = jsondump('file.json')

// Very large array
const largeArray = [...]
for (const item of largeArray) {
  jsondump.write(item)
}

// Indicate end of stream
jsondump.end()

// Await if you need to wait for all writes to finish
await jsondump.end()
```

MIT Licensed. Enjoy!
