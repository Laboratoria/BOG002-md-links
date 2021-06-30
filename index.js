const functionsValidations = require ('./funtionsValidations.js');

const MDLinks = (path) => {

  const pathAbsolute = functionsValidations.pathAbsolute(path);
  const arrayFiles = functionsValidations.pathDirectory(pathAbsolute);
  const arrayObjectsLinks = functionsValidations.ReadMDFile(arrayFiles);
  const arrayPromiseValidates = functionsValidations.validate(arrayObjectsLinks);

}

module.exports = { MDLinks };
