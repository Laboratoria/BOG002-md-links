const functions = require('./functions.js');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

//Limapiando consola y creando un banner de entrada
clear();
console.log(chalk.yellowBright(figlet.textSync('MDLinks', { horizontalLayout: 'full' })));

const MDLinks = (path, validate) => {

  const pathAbsolute = functions.pathAbsolute(path);
  const arrayFiles = functions.pathDirectory(pathAbsolute);
  const arrayObjectsLinks = functions.ReadMDFile(arrayFiles);

  if (validate === "--validate") {
    const arrayPromises = functions.validate(arrayObjectsLinks);
    return Promise.all(arrayPromises);
  } else {
    const promise = Promise.resolve(arrayObjectsLinks)
    return promise
  }
}
// MDLinks("README.md")
// C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md
// MDLinks("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md",true)
// .then(console.log)
// .catch(console.log)

module.exports = { MDLinks };
