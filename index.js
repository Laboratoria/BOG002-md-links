const fs = require('fs');
const path = require('path');
const fetch = require("node-fetch");

// - - - Sync

function textToLinks (text) {
  let links = [];
  // let regexp = /\(([^)]+)\)/g;
  // Encontrar una cadena que cumpla con [ ${textorandom => name} ]( ${otro textorandom => href} )
  let control = {
    openBrackets: false,
    openParen:false,
    spaces:0,
    name: '',
    href:'', 
  }
  let len = text.length;
  for(let i = 0; i<len;i++){
    if(control.openBrackets){
      if(text[i] === ']'){
        control.openBrackets = false;
        control.spaces = 1;
      } else {
        control.name = `${control.name}${text[i]}`
      }
    } else {
      if(text[i] === '[') {
        control.openBrackets = true;
        control.name = '';
      } else if (control.openParen) {
        if(text[i] === ')'){
          control.openParen = false;
          links.push({
            text: control.name,
            href: control.href,
            file: path.resolve(pathName)
          })
        } else {
          control.href = `${control.href}${text[i]}`
        }
      } else if (control.spaces > 3) {
          control.spaces = 0;
      } else if (control.spaces != 0 ) {
        if(text[i] === '('){
          control.openParen = true;
          control.spaces = 0;
          control.href = '';
        } else {
          control.spaces ++
        }
      }
    }
  }
  return links
}

// - - - Async 

const getFile = (pathName) => { 
  return new Promise(
    // Retorna una promesa que resuelve el texto del archivo o un error
    function (resolve,reject){
      fs.readFile(pathName, 'utf8', function (error, data){
        if(error){
          switch (error.code){
            case 'ENOENT':
              reject(new Error('No se encontraron archivos en la ruta'));
            default:
              reject(new Error(error.code));
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
      let dataFile = fs.lstatSync(filePath) === undefined ? null : fs.lstatSync(filePath);
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

function readFile(filePath, validate = false) {
  return new Promise(
    function(resolve, reject) {
      // Obtiene el archivo
      getFile(filePath)
      .then((text) => {
        //Obtiene los links
        let links = textToLinks(text);
        if(validate) {
          //Validar
          let validated = [];
          links.forEach(link => {
            validation(link).then((result) => {
              validated.push(result);
            }).catch((error) => {
              console.log( 'Error en Validation', error);
            });
          });
          resolve(validated)
        } else {
          resolve(links);
        }
      }).catch((error) => {
        reject(new Error(error.code));
      });
    }
  )
}

function validation (link) {
  return new Promise( function(resolve, reject){
    if(link.href[0] == 'h'){
      fetch(link.href).then((response) => {
        if(response.ok) {
          link.ok = 'ok';
          link.status = response.status;
        } else {
          link.ok = 'fail';
          link.status = response.status;
        }
        resolve(link);
      })
      .catch((error) => {
        if(error.code === 'ENOTFOUND'){
          link.ok = 'fail';
          link.status = 404;
          resolve(link);
        } else {
          console.log('Error en Validation (148)', error.code);
          reject(new Error(error.code));
        }
      });
    } 
  })
}

function mdLinks (pathName, options = {validate:false}) {
  // Retorna una promesa que resuelve los links o un error
  return new Promise(
    function (resolve,reject){
      //Comprueba si la ruta existe
      if(fs.existsSync(pathName)){
        let extension = path.extname(pathName);
        let links = [];
        switch (extension){

          case '.md':
            readFile(pathName, options.validate).then( (result) => {
              result.forEach(link => {
                links.push(link)
              });
              resolve(links);
            }).catch((error) => {
              console.log(pathName)
              reject(new Error('Error al leer archivo '+ pathName));
            });
            break;

          case '':
            //Leer carpeta
            let dirFiles = [];
            getDir(pathName, dirFiles, ['node_modules']);
            dirFiles.forEach(filePath => {
              readFile(filePath, options.validate).then( (result) => {
                result.forEach(link => {
                  links.push(link)
                });
                resolve(links);
              }).catch((error) => {
                reject(new Error(error.code));
              });
            })
            break;

          default:
            reject( new Error(`El archivo no tiene una extensión válida`));
            break;
        }
      } else {
        reject( new Error(`La ruta no existe`));
      } 
    }
  )
}

module.exports = (pathName, options = false) => {
  mdLinks(pathName, options)
};
