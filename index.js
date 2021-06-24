const file = './carpeta'
const recursion = require('./recursion.js');
const allFunctions= require('./functions.js')


function mdLinks(path){
  const pathAbs= recursion.evaluatePath(path);
  const pathMd= recursion.mdExt(pathAbs);
  
  const fileReader= allFunctions.readFiles(pathMd)
  console.log('inicio',fileReader)
  // const arrPromise= validate(arrayLinks)---> TODO: PASAR A MDLINKS
            // .then((data)=>{
            //     //arrayFiles.push(validate(data))
            //     console.log(data)
            // })

}

mdLinks(file)