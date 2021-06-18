// module.exports = () => {

// };

const md = require('markdown-it')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

//Funcion que revisa que la ruta ingresada cumpla con los requerimientos para ser validada.
const pathAbsolute = ((ruta) => {

  const isAbsoluteFile = path.isAbsolute(ruta);
  console.log(isAbsoluteFile)

  if (isAbsoluteFile) {
    console.log('La ruta es absoluta');
    return ruta
  } else {
    console.log('La ruta NO es absoluta');
    const pathConvertidaAbsoluta = path.resolve(ruta);
    return pathConvertidaAbsoluta;
  }

});
pathAbsolute("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md")

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


/*requirementsFile.then(
  function(value) {ReadMDFile(value);},

).catch((error) => {console.log(error)});*/
