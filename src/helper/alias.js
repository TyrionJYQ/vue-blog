const path = require('path')
const fs = require('fs')

const dirs = fs.readdirSync(path.resolve(__dirname, '../../src'))
module.exports = (function () {
  const alias = Object.create(null)
  dirs && dirs.forEach(key => alias[`@${key}`] = path.resolve(`./src/${key}`))
  return alias
})()
