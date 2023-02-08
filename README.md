# DumpJSON

Dump large Javascript arrays to JSON file without using too much memory.

If you're looking for a way to read from JSON file into memory, check out [jsonstrom.](https://github.com/eldoy/jsonstrom)

### Install

```
npm i dumpjson
```

### Usage

```js
const dumpjson = require('dumpjson')

// Filename to dump to
const writer = dumpjson('file.json')

// Very large array
const largeArray = [...]
for (const item of largeArray) {
  dumpjson.write(item)
}

// Indicate end of stream
dumpjson.end()

// Await if you need to wait for all writes to finish
await dumpjson.end()
```

MIT Licensed. Enjoy!
