const file = './carpeta'
const recursion = require('./recursion.js');
const allFunctions= require('./functions.js')


function mdLinks(file){ //---->> TODO Revisar la validacion del la funcion validate, pues debe dar opcion con vomando 
  // recorrer array de links y evaluar file
  const pathAbs= recursion.evaluatePath(file);
  const pathMd= recursion.mdExt(pathAbs)
  pathMd.forEach((route)=>{
    allFunctions.reader(route)
      .then(data =>{
      allFunctions.createObjLink(data)
      allFunctions.validate(data)
      })
      .catch((error => console.log('soy el error',{error})))
  })
}
console.log('hola',mdLinks(file))