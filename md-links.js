const mdLinks = require("./index");

mdLinks.api.irDirectorio("../BOG002-md-links")
  .then((links) => {
    console.log(links);    
  })
  .catch(console.error);

mdLinks.api.leerArchivos("./README.md")
  .then((links) => {
     console.log(links);
  })
  .catch(console.error);

mdLinks.api.leerArchivos("./prueba.md", { validate: true })
  .then((links) => {
    mdLinks.api.ValidateLinks(links).then((result) => {
      console.log(result);
    });
  })
  .catch(console.error);

