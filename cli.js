const yargs = require('yargs/yargs')
let funcionmd=require('./index.js')
const argv = yargs


if (argv.length == 1) {
  funcionmd.mdLinks(path).then(array => {
      array.forEach(object => {
          console.table({
              File: object.file,
              href: object.href,
              text: object.text
          })
      })
  })
}


