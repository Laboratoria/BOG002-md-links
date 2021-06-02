const path = require("path");
const fs = require("fs");
const axios = require("axios");

const STATUS_OK = "OK";
const STATUS_FAIL = "FAIL";

/**
 * La funcion recibe una ruta y retorna solo los archivos con extension md
 * @param {string} rutaArchivo Ruta relativa o absuluta del directyorio a analizar
 * @returns  
 */
function irDirectorio (ruta){ 
  return new Promise((resolve, reject) => { 
  let arrResult = [];
  const rutaAbsolute = path.isAbsolute(ruta)
      ? ruta
      : path.resolve(ruta);
  const statss = fs.statSync(rutaAbsolute);
  if (statss.isDirectory()) {
    const LeerDirectorio = fs.readdirSync(ruta);
    LeerDirectorio.forEach(filesName => {
      const absFileName = path.join(ruta, filesName);
      arrResult.push(irDirectorio(absFileName));
    })
    return arrResult;
  }
  if (statss.isFile() && path.extname(ruta) === '.md') {
    console.log("Cargando archivo "+ ruta);
    resolve(leerArchivos(ruta));
  }
})
}

function leerArchivos(rutaArchivo) {
  return new Promise((resolve, reject) => {
    let mdlinks = [];
    fs.readFile(rutaArchivo, "UTF-8", (error, archivos) => {
      if (error) {
        reject(error);
      }
      const links = archivos.matchAll(/\((http.*?)\)/gm);
      let linkEncontrado = links.next();

      while (!linkEncontrado.done) {
        mdlinks.push({
          path: rutaArchivo,
          link: linkEncontrado.value[1],
          text: "text",
        });
        linkEncontrado = links.next();
      }
      resolve(mdlinks);
    });
  });
}

//validar links
function ValidateLinks(arrayLinks) {
  return Promise.all(
    arrayLinks.map((element) => {
      return new Promise((resolve, reject) => {
        axios
          .get(element.link)
          .then((resp) => {
            element.code = resp.status;
            element.status = STATUS_OK;
          })
          .catch((error) => {
            if (error.response) {
              element.code = error.response.status;
              element.status = STATUS_FAIL;
            }
          })
          .then((_) => {
            resolve(element);
          });
      });
    })
  );
}


function statusLinks (url){
  let ok = 0;
  let broke = 0;
    let stats = url.map(response => axios(response).then(function(response) {
        if (response.stats === 200) {
            return ok++
        } else if (response.stats !== 200) {
            return broke++
        }
    }))
    return Promise.all(stats)

    .then(resp => log(('Links totales: ') + (broke + ok)))
        .then(resp => log(('Links Válidos: ') + (ok)))
        .then(resp => log(('Links Inválidos: ') + (broke)))

}
module.exports.api = { leerArchivos, ValidateLinks, irDirectorio, statusLinks};
