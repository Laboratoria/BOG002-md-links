const realPath=require("path")
const functions = require('./funciones.js');
const realFs = require('fs');
const directory = require('./recursion.js');
//REPASO OPERADOR CONDICIONAL TERNIARIO



const mdLinks = (MD,  options = { validate: false }) => {
  var userWrote=true
    directory.main(MD).then(res=>res.forEach(element => {
      functions.readLinks(element,userWrote)
      .then(hola=>{console.log(hola)})
      .catch(error=>{
        console.log("Nel perro "+error)
      });
    }))};
   
           
    



module.exports = { mdLinks 
 
};