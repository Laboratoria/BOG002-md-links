// module.exports = () => {

// };

const md = require('markdown-it')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

//Leer el archivo .md
const ReadMDFile = (path) => {

  //Asincrono
  // fs.readFile(path, 'utf8', (err, data) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //Sincrono
  const data = fs.readFileSync(path, 'utf8')
  const mdHTML = md.render(data);
  const dom = new JSDOM(mdHTML);
  const etiquetasA = dom.window.document.querySelectorAll("a")

  let arrayLinks = []
  etiquetasA.forEach((link) => {

    const coincidenciaEnlace = new RegExp('#', 'y');
    const attributeHref = link.getAttribute('href');

    if (coincidenciaEnlace.test(attributeHref)) {
      console.log('no es un link')
    } else {
      arrayLinks.push({
        href: link.getAttribute('href'),
        text: link.textContent,
        file: path
      })
    }

  })

  return arrayLinks

  // })
}
// console.log(ReadMDFile("./README.md"));
ReadMDFile("./README.md")

const requirementsFile = new Promise(function (myResolve, myReject) {

  const isAbsoluteFile = path.isAbsolute();

  if (isAbsoluteFile) {
    myResolve('El archivo es absoluto');
  } else {
    myReject('El archivo NO es absoluto');
  }

});

requirementsFile.then(
  function(value) {ReadMDFile(value);},
  function(error) {ReadMDFile(error);}
);
