#!/usr/bin/env node

const program = require("commander");
const  mdLinks  = require("./index");

const cli = (name, options, command) => {
   mdLinks.mdLinks(name, true)

};

program
  .version("0.1.0")
  .arguments("<path>")
  .option("-v, --validate")
  .option("-s, --stats")
  .action(cli);
program.parse(process.argv);



// if (argv.length == 1) {
//   funcionmd.mdLinks(path).then(array => {
//       array.forEach(object => {
//           console.table({
//               File: object.file,
//               href: object.href,
//               text: object.text
//           })
//       })
//   })
// }


