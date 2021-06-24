// module.exports = () => {

// };

const md = require('markdown-it')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

//Funcion que revisa que la ruta ingresada cumpla con los requerimientos para ser validada.
// const pathAbsolute = ((ruta) => {

//   const pathExist = fs.existsSync(ruta)
//   const isAbsoluteFile = path.isAbsolute(ruta);

//   if (pathExist && isAbsoluteFile) {
//     console.log('La ruta existe y es absoluta');
//     return ruta
//   } else if (pathExist && !isAbsoluteFile) {
//     console.log('La ruta existe y NO es absoluta');
//     const pathConvertAbsolut = path.resolve(ruta);
//     return pathConvertAbsolut;
//   } else {
//     console.log("la ruta no existe")
//   }

// });
// pathAbsolute("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md")
// pathAbsolute("README.md")

const pathDirectory = ((ruta, fileDirectory) => {

  let arrayFilesDirectory = fileDirectory || [];
  const files = fs.readdirSync(ruta)

  files.forEach((file) => {
    const pathChild = path.join(ruta, file)
    const fileIsDirectory = fs.lstatSync(pathChild).isDirectory()

    if (fileIsDirectory === true) {
      // console.log("es un directorio")
      arrayFilesDirectory = pathDirectory(pathChild, arrayFilesDirectory)
      // arrayFilesDirectory.push(fs.readdirSync(ruta).map((rutaHijo) => pathDirectory(ruta + '/' + rutaHijo)))
      console.log(arrayFilesDirectory)

    } else {
      // console.log("No es un directorio");
      const extFile = path.extname(pathChild);

      if (extFile === ".md") {
        arrayFilesDirectory.push(pathChild)
      }
    }

  })
  // if (fileIsDirectory) {

  // console.log('La ruta es un directorio');
  // const pathConvertFile = fs.readdirSync(ruta);
  // console.log(pathConvertFile)
  // return pathConvertFile


  // }  (!fileIsDirectory){
  //   console.log('La ruta NO es un directorio');
  //   return ruta;
  // }
  return arrayFilesDirectory;
});
const resultado = pathDirectory("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/node_modules")
console.log(resultado)

// if (module.parent == undefined) {
//   // node dirTree.js ~/foo/bar
//   var util = require('util');
//   console.log(util.inspect(pathDirectory(process.argv[2]), false, null));
// }

//Leer el archivo .md
// const ReadMDFile = (ruta) => {

//   requirementsFile(ruta)
//     // .then((resultado) => { console.log(resultado)})
//     // .catch((error) => { console.log(error) });

//   //Asincrono
//   // fs.readFile(ruta, 'utf8', (err, data) => {
//   //   if (err) {
//   //     console.error(err)
//   //     return
//   //   }
//   //Sincrono
//   const data = fs.readFileSync(ruta, 'utf8')
//   const mdHTML = md.render(data);
//   const dom = new JSDOM(mdHTML);
//   const etiquetasA = dom.window.document.querySelectorAll("a")

//   let arrayLinks = []
//   etiquetasA.forEach((link) => {

//     const coincidenciaEnlace = new RegExp('#', 'y');
//     const attributeHref = link.getAttribute('href');

//     if (!coincidenciaEnlace.test(attributeHref)) {

//       arrayLinks.push({
//         href: link.getAttribute('href'),
//         text: link.textContent,
//         file: ruta
//       })

//     }

//   })

//   return arrayLinks
// }
// // console.log(ReadMDFile("./README.md"));
// ReadMDFile("README.md")
