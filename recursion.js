//Recursion intento
//ACA si voy a usar expresiones regulares con lo que la persona introduzca
// var base="D:/LAURAS/Laboratoria/Proyecto 3/BOG002-social-network"
const realPath = require('path');
const realFs = require('fs');

// var base="D:/LAURAS/Laboratoria/Proyecto 4/BOG002-md-links"
// var base='D:/LAURAS/Laboratoria/Proyecto 4/BOG002-md-links/README.md'
// // var base="prueba/holaestoindex.jsa"
// var relativeExt="prueba/holaestoindex.js"
//cada vez que quiera salir de la carpeta en la que estoy agrego dos puntos,si pongo solo un punto es porque estoy en el mismo nivel de mi archivo
var arrayMD=[]
//deaddir solo resuelve absolutas
// absolute(base)


function main(base){
  return new Promise((resolve,reject)=>{
    absolute(base);
    setTimeout(function(){ resolve(arrayMD) }, 2500);
  })
  
  
}

function absolute(path){
  realPath.isAbsolute(path) ==true ? directorio(path) : directorio(convert(path)); 
}


function directorio(link){ 
  realFs.lstatSync(link).isDirectory()  === true ? readDire(link) : verificarMD(link) }


function verificarMD(path){
  // console.log(path)
  if (realPath.extname(path) == ".md") {arrayMD.push(path)}
 
}


function convert(path){
  let link=realPath.resolve(path)
link=link.replace(/\\/g,"/")
  // console.log(link)
  return link
  }
  
  // realFs.readdir('D:/LAURAS/Laboratoria/Proyecto 4/BOG002-md-links/prueba', (err, files) => {
  //   if (err)
  //     console.log("nop");
  //   else {console.log(files)}})

function readDire(path){
  //comenzar por aqui y ligarla a otras
  
    realFs.readdir(path, (err, files) => {
      if (err)
        console.log(err);
      else {

       
        if(files.length==0){
          return
        }else{
        files.forEach(file => {
            
          absolute(path+"/"+file)
                })    
      }
      }
    })
  }

//  console.log(realPath.resolve("MINTIC/Ejercicios ciclo1"));
//  console.log(process.cwd())
//   const getRelativePath = (link) =>
//   realPath.isAbsolute(link) ? console.log(link+" hola toy aqui") : console.log(realPath.relative(process.cwd(), link)+" si esta en la misma linea entra pero wtf");
//   getRelativePath(base)

  // const getAbsolutePath = (link) =>
  // realPath.isAbsolute(link) ? console.log(link,"entro primero") : console.log(realPath.resolve(link,"entro segundo"));
  // getAbsolutePath(base)
//  recursion una funcion que me cumple con ciertas caracteristicas y dentro de esa logica llamo a leer() again
// Hasta aqui va recursion

module.exports = {
  main,
 
};












//NOTAS
// //Creacion de archivo en cualquier extension 
// realFs.appendFile("mitocode.txt","informacion del pc,hola si se crea cada que lo llamas",function(error){if(error){console.log("error al crear archivo")}})

// // const mi=require("./mito")
// // console.log(mi.cosillas)
// // para una funcion que tenga algo solamente ponemos mi.funcion()



// var nombre=realPath.extname('mitocode.js') 
// realFs.existsSync(base) && realFs.lstatSync(base).isDirectory()
// console.log(base,nombre,typeof(probar))

// a tener en cuenta process.cwd() (e current directory 
//me ayuda a pasar la relativa al directorio actual revisar con path resolve)
//resolve a relative
//comenzar con una funcion base que haga las cositas de leer archivos y sacar los links :v

