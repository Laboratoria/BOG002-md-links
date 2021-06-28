const fs = require('fs');
const path = require('path');

const getFile = (pathName) => { 
  return new Promise(
    // Retorna una promesa que resuelve el texto del archivo o un error
    function (resolve,reject){
      fs.readFile(pathName, 'utf8', function (error, data){
        if(error){
          switch (error.code){
            case 'ENOENT':
              reject(new Error(`No se encontraron archivos en la ruta ${pathName}`));
            default:
              reject(new Error(`Error ${error.code} al leer el archivo ${pathName}`));
          }
        } else {
          resolve(data);
        }
      })
    }
  )
}

const getDir = (pathName, paths, ignore = []) => { 
  let files = fs.readdirSync(pathName);
  for (let i = 0; i<files.length; i++) {
    if ( ignore.indexOf(files[i]) === -1 ) {
      let filePath = path.join(pathName, files[i]);
      let dataFile = !fs.lstatSync(filePath) ? null : fs.lstatSync(filePath);
      if (dataFile) {
        if (dataFile.isDirectory()) {
          getDir(filePath, paths);
        } else if (path.extname(filePath) === '.md') {
          paths.push(filePath);
        } else {
          //NOOP
        }
      }
    }
  }
}

module.exports = { getFile, getDir }