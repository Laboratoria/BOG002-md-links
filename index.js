// module.exports = () => {

// };
// habilitar todo
// var  md  =  require ( 'markdown-it' ) ( {
//   html : true ,
//   linkify : true ,
//   typographer : true
// } ) ;
const md = require('markdown-it')();

const fs = require('fs')
//verificacion
fs.readFile('./README.md', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const resultado = md.render(data);
  // console.log(data)
  console.log(resultado)
})

// const tokens = md.parse('[google](www.google.com)')
// console.log(tokens);
