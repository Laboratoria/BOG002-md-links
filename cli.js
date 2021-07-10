#!/usr/bin/env node

const MDLinks = require("./index.js")
// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers');

// const argv = yargs(hideBin(process.argv))
// .options({
//   'path': {
//     alias: 'file',
//     demandOption: true,
//     default: './',
//     describe: 'Agrega la ruta donde quieres ejecutar el comando',
//     type: 'object'
//   },
//   'validate': {
//     alias: 'validate',
//     demandOption: true,
//     default: false,
//     describe: 'Indica si quieres validar los estatus HTTP',
//     type: 'object'
//   }
// })
// .argv

const [, , ...args] = process.argv;
const path = args[0]
const validate = args[1]

if (path && validate) {
  MDLinks.MDLinks(path, validate)
  .then( result => console.log(result))
  .catch( error => console.log(error))
}
else if (path) {
  MDLinks.MDLinks(path)
  .then( result => console.log(result))
  .catch( error => console.log(error))
}
