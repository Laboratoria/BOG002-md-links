// module.exports = {
//   // ...
// };

const file = './README.md'
const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

// Path Evaluation (relative or absolute)

const route = path.resolve(file)
let absolute= path.isAbsolute(route)
console.log(route)

// read file//
const reader = new Promise((resolve,reject)=>{
  return fs.readFile(file, 'utf8' , (error, data) => {
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

// Crear array de objetos con links
function createObjLink(data){
  let arrLink=[]
  const links = markdownLinkExtractor(data, true);
  links.forEach(link => {
    const getLink= link.href;
    const text = link.text;
    const objLink= {
      link: getLink,
      text: text,
      file: file,
    }
    arrLink.push(objLink)
  });
  return arrLink
}


