const file = './carpeta/'
const path = require('path');
const { resolve } = require('path');
const fs = require('fs');

// Path Evaluation (relative or absolute)
function evaluatePath(file){
    if(path.isAbsolute(file)===false){
      return path.resolve(file);
    }
}
  
// Funcion para saber si la ruta es un archivo
const isFile = (route) => fs.statSync(route).isFile();
  
// Funcion para saber si es un archivo .md
const isMdFile = (route) => (path.extname(route) === '.md');
  
// evaluar si archivo es de extension MD o un folder//
let arrayMdFile = [];
function mdExt(route){
    // array de archivos md dentro del folder
    // si es un ruta de archivo
    if(isFile(route)){
      if(isMdFile(route)){
        arrayMdFile.push(route);
      } else {
        console.error('no es un archivo valido')
      }
    } else{
        const arrayOfFiles = fs.readdirSync(route);
        arrayOfFiles.forEach(element => {
          mdExt(path.join(route, element));
        })
    }
  return arrayMdFile
}
  
module.exports = {
    evaluatePath,
    mdExt,
};