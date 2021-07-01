const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { mdLinks } = require("./index");
const [, , ...args] = process.argv;
const path = args[0];



if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!')
  } else {
    console.log('Retreat from the xupptumblers!')
  }