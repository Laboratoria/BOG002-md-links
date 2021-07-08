#!/usr/bin/env node

const MDLinks = require("./index.js")
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
.options({
  'path': {
    alias: 'file',
    demandOption: true,
    default: './',
    describe: 'Agrega la ruta donde quieres ejecutar el comando',
    type: 'object'
  },
  'validate': {
    alias: 'validate',
    demandOption: true,
    default: false,
    describe: 'Agrega la ruta donde quieres ejecutar el comando y validar',
    type: 'object'
  }
})
.argv

// const [, , ...args] = process.argv;
// console.log(`Hello world ${argv}`)

// let args = yargs
//   .option('path', {
//     demand: true
//   })
//   .option('validate', {
//     description: "validar links",
//     demand: true
//   }).argv;

  console.log(JSON.stringify(argv));


// if () {
//   MDLinks.MDLinks(path).then()
// }
// else if () {}

