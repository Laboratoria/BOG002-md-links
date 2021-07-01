const realPath=require("path")
const functions = require('./funciones.js');
const realFs = require('fs');
const directory = require('./recursion.js');
//REPASO OPERADOR CONDICIONAL TERNIARIO

const MD = "README.md"

const mdLinks = (MD,  options = { validate: false }) => {
  var userWrote=true
    directory.main(MD).then(res=>res.forEach(element => {
      functions.readLinks(element,userWrote)
      .then(hola=>{console.log(hola)})
      .catch(error=>{
        console.log("Nel perro "+error)
      });
    }))};
    // typeof MD === "string" ? (console.log("Si sirve")):(console.log("No sirve"))
    // const extFile = realPath.extname(MD);
    // return new Promise((resolve, reject) => {
    //       if (extFile===".md"){
    //         console.log(MD)
    //         resolve(MD)
    //       } else{
    //         reject("array vacio")
    //       }
            
            
    
    
mdLinks(MD,true)

// .then(res => {
//   
//   //pasarlo a la promesa principal de md links
// return functions.readLinks(res,userWrote)})
// .then(hola=>{console.log(hola)})
//     .catch(error=>{
//       console.log("Nel perro "+error)
//     });