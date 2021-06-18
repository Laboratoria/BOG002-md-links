import { getFile, getDir } from './lib/getFiles.js';
import textToLinks from './lib/getLinks.js';
import validation from './lib/getLinks.js';

function readFile(filePath, validate) {
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
              reject(new Error(`Error ${error.code} al validar el link ${link.href}`));
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
mdLinks('../SocialNetwork/noExiste.txt').then(result => 
  console.log(result)
).catch(error =>
  console.log(error)
);
mdLinks('./README.md',{validate:true}).then(result => 
  console.log(result)
).catch(error =>
  console.log(error)
);
mdLinks('../SocialNetwork/README.md').then(result => 
  console.log(result)
).catch(error =>
  console.log(error)
);
mdLinks('../DataLovers',{validate:true}).then(result => 
  console.log(result)
).catch(error =>
  console.log(error)
);

module.exports = (pathName, options = false) => {
  mdLinks(pathName, options)
};
