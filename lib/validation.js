const fetch = require("node-fetch");

module.exports = (link) => {
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
          reject(new Error(`Error ${error.code} en la validación del link ${link.href}`));
        }
      });
    }  else {
      resolve(link)
    }
  })
}