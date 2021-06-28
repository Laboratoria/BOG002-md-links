// module.exports = () => { };

const md = require('markdown-it')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch')

// Funcion que revisa si la ruta ingresada es absoluta o relativa y si es relativa la convierte en absoluta.
const pathAbsolute = ((ruta) => {

  const pathExist = fs.existsSync(ruta)
  const isAbsoluteFile = path.isAbsolute(ruta);

  if (pathExist && isAbsoluteFile) {
    return ruta
  } else if (pathExist && !isAbsoluteFile) {
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
    const extFile = path.extname(ruta);
    if (extFile === ".md") {
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
// ReadMDFile("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md")

const objetoLink = {
  href: "http://googleeeee.cun",
  text: "hola",
  file: "file.md"
}

const newObject = (object) => {

  const promise = new Promise((resolve, reject) => {
    fetch(object.href)
    .then((result) => {
      const createObject = {...object, status: result.status, statusText: result.statusText}
      resolve(createObject)
      console.log(createObject)
    })
    .catch((error) => {
      // const createObject = {...object, status: .status, statusText: result.statusText}
      // resolve(createObject);
      console.log(error)
    })
  })
  return promise
}
newObject(objetoLink);


//Función que revisa cada link con fetch y valida el estatus HTTP.
// const validate = (arrayToObjects) => {
//   const newArrayObject = arrayToObjects.map( object =>

//   )
//   return promiseAll
// }
// validate(ReadMDFile("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md"))
