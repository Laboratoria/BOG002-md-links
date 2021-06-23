const path = require('path');
const validation = require('./validation');
const getFile = require('./getFiles').getFile;
const textToLinks = require('./getLinks');

module.exports = (filePath, validate) => {
  return new Promise(
    function(resolve, reject) {
      // Obtiene el archivo
      getFile(filePath)
      .then((text) => {
        //Obtiene los links
        let links = textToLinks(text);
        links.forEach(link => {
          link.file = path.resolve(filePath);
        });
        if(validate) {
          let arrayPromesas = links.map((l) => {
            return validation(l)
          })
          Promise.all(arrayPromesas).then((values)=>{
            resolve(values)
          })
        } else {
          resolve(links);
        }
      }).catch((error) => {
        reject(new Error(error));
      });
    }
  )
}