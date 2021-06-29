const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { mdLinks } = require("./index");
const [, , ...args] = process.argv;
const path = args[0];


if (args.length == 1) {
    mdLinks(path).then(array => {
        array.forEach(object => {
            console.table({
                File: object.file,
                href: object.href,
                text: object.text
            })
        })
    })
}