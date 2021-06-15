//Recursion intento
//ACA si voy a usar expresiones regulares con lo que la persona introduzca
var base="D:/LAURAS/Laboratoria/Proyecto 4/BOG002-md-links"
var relativeExt="README.md"
//cada vez que quiera salir de la carpeta en la que estoy agrego dos puntos,si pongo solo un punto es porque estoy en el mismo nivel de mi archivo
realFs.readdir(base, 
    function (err, archivos) {
    if (err) {
        console.log(console.error)
        return console.log("un error es esto como tu vida");
    ;
    }
    console.log(archivos);
    console.log(typeof(archivos),"esto es archivos")
    
    for (var i in archivos[i]){
      console.log(archivo[i])
      var archivoMD=archivo[i]
      console.log(realPath.extname(archivoMD))
      var recursionPichis= realPath.extname(archivoMD) 
      if (recursionPichis=="md"){
        return console.log(realPath.resolve(base,archivoMD))}
    }
    });
 //recursion una funcion que me cumple con ciertas caracteristicas y dentro de esa logica llamo a leer() again
//Hasta aqui va recursion


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

