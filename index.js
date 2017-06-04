'use strict'

const pify = require('pify')
const async = require('async')
const pifyAsync = pify(async)

module.exports = pifyAsync