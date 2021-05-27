const path = require("path");
const fs = require("fs");
const axios = require("axios");
//const { ok, fail } = require("assert");
const STATUS_OK = "OK";
const STATUS_FAIL = "FAIL";
let rutaArchivo = "./prueba.txt";

var LeerArchivos = new Promise((resolve, reject) => {
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
        //code: 200,
        //status: STATUS_OK,
      });
      linkEncontrado = links.next();
    }
    resolve(mdlinks);
  });
});
//validar links
function ValidateLinks(arrayLinks) {
  return arrayLinks.map((element) => {
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
  });
}

LeerArchivos.then((resp) => {
  Promise.all(ValidateLinks(resp)).then((resp2) => {
    console.log(resp2);
  });
});
