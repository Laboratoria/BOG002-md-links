const request = require('request');

var link='http://www.gofsdgfadgsfdogle.com/'
const resp=request(link, (error, response) =>{
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//promesa que envuelva al request   corregir aqui
// console.log("espacio      "+response+"    espacio       "+error)
return new Promise ((resolve, reject) => {
    if (response != undefined){
      
      resolve(console.log(response.statusCode))
    } else{
      reject(console.log("esto esta re roto como tu alma "+ error))
    }
        
})}
);
