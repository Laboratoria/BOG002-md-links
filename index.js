const file = './carpeta'
const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const { resolve } = require('path');
const recursion = require('./recursion.js')


// recorrer array de links y evaluar file
const pathAbs= recursion.evaluatePath(file);
const pathMd= recursion.mdExt(pathAbs)

// read file//
const reader = (route)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(route, 'utf8' , (error, fileInfo) => { 
      if(fileInfo){
        resolve({ fileInfo, route })
      } else{
        reject(error)
      }
    });
  });
}
pathMd.forEach((route)=>{
  reader(route)
    .then(data =>{
    createObjLink(data)
    })
    .catch((error => console.log('soy el error',{error})))
})

// Crear array de objetos con links//
function createObjLink(data){
  let arrLink=[]
  const links = markdownLinkExtractor(data.fileInfo, true);
  // if para comprobar los links
  links.forEach(link => {
    if(link.href.startsWith('http')){
      const getLink= link.href;
      const text = link.text;
      const objLink= {
        link: getLink,
        text: text,
        file: data.route,
      }
      arrLink.push(objLink)
    }
  });
  return arrLink
}


