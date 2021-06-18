const fetch = require("node-fetch");

export default function (link) {
  return new Promise( function(resolve, reject){
    if(link.href[0] == 'h'){
      fetch(link.href).then((response) => {
        if(response.ok) {
          link.ok = 'ok';
          link.status = response.status;
        } else {
          link.ok = 'fail';
          link.status = response.status;
        }
        resolve(link);
      })
      .catch((error) => {
        if(error.code === 'ENOTFOUND'){
          link.ok = 'fail';
          link.status = 404;
          resolve(link);
        } else {
          console.log('Error en Validation (148)', error.code);
          reject(new Error(error.code));
        }
      });
    } 
  })
}