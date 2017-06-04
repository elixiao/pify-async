# pify-async

> promisified async package

## Install

```bash
npm install pify-async --save
yarn add pify-async
```

## Usage

```javascript
const async = require('pify-async')

const callbacks = [1, 2, 3].map(it => cb => {
    setTimeout(() => {
        cb(null, it)
    }, 1000)
})

async.series(callbacks).then(data => {
    console.log(data)
})
```

## License

MIT