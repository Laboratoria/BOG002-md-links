const mdLinks = require("./index");

mdLinks.api.leerArchivos("./prueba.txt")
  .then((links) => {
     console.log(links);
  })
  .catch(console.error);

mdLinks.api.leerArchivos("./prueba.txt", { validate: true })
  .then((links) => {
    mdLinks.api.ValidateLinks(links).then((result) => {
      console.log(result);
    });
  })
  .catch(console.error);

mdLinks.api.irDirectorio("./prueba.txt")
  .then((links) => {
    console.log(links);
    
  })
  .catch(console.error);
