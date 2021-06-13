// module.exports = () => {

// };

const md = require('markdown-it')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fs = require('fs')
//Leer el archivo .md
fs.readFile('./README.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  //Mostrar las etiquetas html del archivo .md leido
  const resultado = md.render(data);
  // console.log(resultado)
  const dom = new JSDOM(resultado);
  console.log(dom.window.document.querySelectorAll("a"))
})



// const tokens = md.parse('[google](www.google.com)')
// console.log(tokens);

