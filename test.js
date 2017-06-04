const async = require('./index')

const callbacks = [1, 2, 3].map(it => cb => {
    setTimeout(() => {
        cb(null, it)
    }, 1000)
})

async.series(callbacks).then(data => {
    console.log(data)
})