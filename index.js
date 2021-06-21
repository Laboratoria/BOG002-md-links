const file = './carpeta'
const path = require('path');
const { resolve } = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const recursion = require('./recursion.js');
const { default: fetch } = require('node-fetch');
// const fetch = require('node-fetch');

// // funcion mdLinks

// const mdLinks=(path,option){

// }

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
//MDLinks--> path
pathMd.forEach((route)=>{
  reader(route)
    .then(data =>{
    createObjLink(data)
    validate(data)
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
  return (arrLink)
}


//validate

function validate(data){
  const arrayLinks=createObjLink(data)
  const arrayPromise= arrayLinks.map((element)=>fetch(element.link)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.status)
        console.log(res.statusText)
        console.log(element)
        return{
          ...element,
          status: res.status,
          statusText: res.statusText,
        }
      } else {
          return{
            ...element,
            status: res.status,
            statusText: 'FAIL',
          }
      }
    })
    .catch(() => {
      return{
        ...element,
        status: 'Error',
        statusText: 'FAIL',
      }
    })
  )
  return (arrayPromise)
}



module.exports = {
  createObjLink,
  reader,
};
