const functionsValidations = require('./funtionsValidations.js');

const MDLinks = (path, validate) => {

  const pathAbsolute = functionsValidations.pathAbsolute(path);
  const arrayFiles = functionsValidations.pathDirectory(pathAbsolute);
  const arrayObjectsLinks = functionsValidations.ReadMDFile(arrayFiles);

  if (validate === true) {
    const arrayPromises = functionsValidations.validate(arrayObjectsLinks);
    return Promise.all(arrayPromises);
  } else {
    const promise = Promise.resolve(arrayObjectsLinks)
    return promise
  }

}
MDLinks("README.md", true)
.then(console.log)
.catch(console.log)

module.exports = { MDLinks };
