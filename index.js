// module.exports = {
//   // ...
// };

const file = './README.md'
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

// evaluar si archivo es de extension MD//
function mdExt(route){
  if(path.extname(route) !== '.md'){
    console.log('Este archivo no tiene la extension correcta')
  } else{
    console.log('working')
    // pasar el .then de readfile
  }
}
console.log(mdExt(route)) //--> probando func

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
  console.log(arrLink)
}


