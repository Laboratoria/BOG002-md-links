// module.exports = () => { };

const md = require('markdown-it')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

// Funcion que revisa si la ruta ingresada es absoluta o relativa y si es relativa la convierte en absoluta.
const pathAbsolute = ((ruta) => {

  const pathExist = fs.existsSync(ruta)
  const isAbsoluteFile = path.isAbsolute(ruta);

  if (pathExist && isAbsoluteFile) {
    console.log('La ruta existe y es absoluta');
    return ruta
  } else if (pathExist && !isAbsoluteFile) {
    console.log('La ruta existe y NO es absoluta');
    const pathConvertAbsolut = path.resolve(ruta);
    return pathConvertAbsolut;
  } else {
    console.log("la ruta no existe")
  }
});


//Función que revisa si la ruta es un directorio, si es asi crea un array con una lista de los archivos.
const pathDirectory = ((ruta, fileDirectory) => {

  let arrayFilesDirectory = fileDirectory || [];
  const fileIsDirectory = fs.lstatSync(ruta).isDirectory()

  if (fileIsDirectory === false) {
    console.log("Es un archivo")
    const extFile = path.extname(ruta);
    if (extFile === ".md") {
      console.log("es un archivo MD")
      arrayFilesDirectory.push(ruta)
    }

  } else if (fileIsDirectory === true) {
    const files = fs.readdirSync(ruta)
    files.map((file) => {
      const pathChild = path.join(ruta, file)
      arrayFilesDirectory = pathDirectory(pathChild, arrayFilesDirectory)
    })
  }

  return arrayFilesDirectory;
});


// if (module.parent == undefined) {
//   // node dirTree.js ~/foo/bar
//   var util = require('util');
//   console.log(util.inspect(pathDirectory(process.argv[2]), false, null));
// }

// Función que lee el archivo .md
const ReadMDFile = (ruta) => {

  pathAbsolute(ruta);
  const arrayListFiles = pathDirectory(ruta);
  let arrayLinks = []
  arrayListFiles.forEach((ruta1) => {

    const data = fs.readFileSync(ruta1, 'utf8')
    const mdHTML = md.render(data);
    const dom = new JSDOM(mdHTML);
    const etiquetasA = dom.window.document.querySelectorAll("a")


    etiquetasA.forEach((link) => {
      const coincidenciaEnlace = new RegExp('#', 'y');
      const attributeHref = link.getAttribute('href');

      if (!coincidenciaEnlace.test(attributeHref)) {

        arrayLinks.push({
          href: link.getAttribute('href'),
          text: link.textContent,
          file: ruta1
        })
      }
    })
  });

  return arrayLinks
}
console.log(ReadMDFile("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md"))
