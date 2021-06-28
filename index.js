const fs = require('fs');
const path = require('path');
const getDir = require('./lib/getFiles').getDir;
const readFile = require('./lib/reader');

function mdLinks (pathName, options = {validate:false}) {
  // Retorna una promesa que resuelve los links o un error
  return new Promise(
    function (resolve,reject){
      //Comprueba si la ruta existe
      if(fs.existsSync(pathName)){
        let extension = path.extname(pathName);
        switch (extension){

          case '.md':
            readFile(pathName, options.validate).then( (result) => {
              resolve(result);
            }).catch((error) => {
              reject(new Error(error));
            });
            break;

          case '':
            //Leer carpeta
            let dirFiles = [];
            let links = [];
            getDir(pathName, dirFiles, ['node_modules']);
            dirFiles.forEach(filePath => {
              readFile(filePath, options.validate).then( (result) => {
                links = links.concat(result)
              }).catch((error) => {
                console.log(':(', error)//reject(new Error(error));
              });
            })

            /*
            dirFiles.forEach(filePath => {
              readFile(filePath, options.validate).then( (result) => {
                result.forEach(l => {
                  links.push(l)
                });
              }).catch((error) => {
                reject(new Error(error));
              });
            })

            let promises = dirFiles.map(filePath => {
              return readFile(filePath, options.validate)
            })
            Promise.all(promises).then((values) => {
              console.log(values)
              values.forEach(l => {
                links.push(l)
              });
              resolve(links)
            }).catch((error) => {
              reject(new Error(error));
            });
            */

            resolve(links);
            break;
          default:
            reject( new Error(`El archivo no tiene una extensión válida`));
            break;
        }
      } else {
        reject( new Error(`La ruta ${pathName} no existe`));
      } 
    }
  )
}

module.exports = (pathName, options) => {
  return mdLinks(pathName, options)
};

mdLinks('../SocialNetwork/noExiste.txt').then(result => 
  console.log(result)
).catch(error =>
  console.log(error)
);
/*mdLinks('./README.md', {validate:true}).then(result => 
  console.log(result)
).catch(error =>
  console.log(error)
);
mdLinks('../SocialNetwork/README.md', {validate: true}).then(result => 
  console.log(' SN README ' , result)
).catch(error =>
  console.log(error)
);*/
mdLinks('../DataLovers',{validate:true}).then(result => 
  console.log(' DATALOVERS ',result)
).catch(error =>
  console.log(error)
);
