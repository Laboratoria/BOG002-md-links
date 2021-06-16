// module.exports = {
//   // ...
// };

const file = './directorio/'
const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const { resolve } = require('path');

// Path Evaluation (relative or absolute)
function evaluatePath(file){
  if(path.isAbsolute(file)===false){
   return path.resolve(file);
  }
}
const route= evaluatePath(file);

// FUNCION PARA SABER SI LA RUTA ES UN ARCHIVO
const isFile = (route) => fs.statSync(route).isFile();


// FUNCION PARA SABER SI ES UN ARCHIVO .MD
const isMdFile = (route) => (path.extname(route) === '.md');
// evaluar si archivo es de extension MD//
function mdExt(route){
  // array de archivos md dentro del folder
  let arrayMdFile = [];
  // si es un ruta de archivo
  if(isFile(route)){
    if(isMdFile(route)){
      arrayMdFile.push(route);
    } else {
      console.error('no es un archivo valido')
    }
  } else{
    const arrayOfFiles = fs.readdirSync(route);
    const stringDir= arrayOfFiles.toString()
    const newRoute= route.concat('/',stringDir)
    console.log('soy extension',arrayOfFiles)
    console.log('soy nueva ruta - ', newRoute)
    mdExt(newRoute)
    // // const arrayMd = getMdFiles(path.join(route, file));
    //   arrayOfFiles.forEach((file) => {
    //     // arrayMdFile = arrayMdFile.concat(arrayMd);
    //   });
  }
  return arrayMdFile;
}
mdExt(route)








// read file//
const reader = new Promise((resolve,reject)=>{
  return fs.readFile(route, 'utf8' , (error, data) => {
    if(data){
      resolve(data)
    } else{
      reject(error)
    }
  });
});
reader
  .then(data =>{
   createObjLink(data)
  })
  .catch((error => console.error({error})))

// Crear array de objetos con links//
function createObjLink(data){
  let arrLink=[]
  const links = markdownLinkExtractor(data, true);
  // if para comprobar los links
  links.forEach(link => {
    if(link.href.startsWith('http')){
      const getLink= link.href;
      const text = link.text;
      const objLink= {
        link: getLink,
        text: text,
        file: file,
      }
      arrLink.push(objLink)
    }
  });
  // console.log(arrLink)
}


