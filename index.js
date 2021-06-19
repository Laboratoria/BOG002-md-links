const realPath=require("path")
const functions = require('./funciones.js');


//REPASO OPERADOR CONDICIONAL TERNIARIO

const MD = './README.md'

const mdLinks = (MD,  options = { validate: false }) => {
    
    typeof MD === "string" ? (console.log("Si sirve")):(console.log("No sirve"))
    const extFile = realPath.extname(MD);
    return new Promise((resolve, reject) => {
          if (extFile===".md"){
            console.log(MD)
            resolve(MD)
          } else{
            reject("array vacio")
          }
            
            
    })};
    
mdLinks(MD,true)

.then(res => {
  var userWrote=true
return functions.readLinks(res,userWrote)})
.then(hola=>{console.log(hola)})
    .catch(error=>{
      console.log("Nel perro "+error)
    });