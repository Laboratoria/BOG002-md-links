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
    return new Error("La ruta no existe")
    // throw new Error ("La ruta no existe")
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
const ReadMDFile = (arrayListFiles) => {

  let arrayObjectsLinks = []

  arrayListFiles.forEach((ruta1) => {

    const data = fs.readFileSync(ruta1, 'utf8')
    const mdHTML = md.render(data);
    const dom = new JSDOM(mdHTML);
    const etiquetasA = dom.window.document.querySelectorAll("a")

    etiquetasA.forEach((link) => {
      const coincidenciaEnlace = new RegExp('#', 'y');
      const attributeHref = link.getAttribute('href');

      if (!coincidenciaEnlace.test(attributeHref)) {

        arrayObjectsLinks.push({
          href: link.getAttribute('href'),
          text: link.textContent,
          file: ruta1
        })
      }
    })
  });

  return arrayObjectsLinks
}

const newObjectStatusLink = object => {

  const promise = new Promise(resolve => {
    fetch(object.href)
      .then(result => {
        const createObjectStatusLinkOK = { ...object, status: result.status, statusText: result.statusText }
        resolve(createObjectStatusLinkOK)
      })
      .catch(error => {
        const createObjectStatusLinkFail = { ...object, status: "fail", statusText: error.errno }
        resolve(createObjectStatusLinkFail);
      })
  })
  return promise
}

//Función que revisa cada objeto que contiene cada link con fetch y valida el estatus HTTP, retornando una promesa por cada objeto revisado.
const validate = arrayToObjects => {
  const arrayPromisesValidate = arrayToObjects.map(object =>
    newObjectStatusLink(object)
  )
  return arrayPromisesValidate
}

module.exports = {
  pathAbsolute,
  pathDirectory,
  ReadMDFile,
  validate
};
