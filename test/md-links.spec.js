const mdLinks = require('../index.js');
const functions = require('../functions');

describe('pathAbsolute', () => {
  test('debería ser una función', () => {
    expect(typeof functions.pathAbsolute).toBe('function');
  });
  test('deberia ser una ruta absoluta', () => {
    const resultado1 = functions.pathAbsolute("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md")
    expect(resultado1).toBeTruthy;
  });
  test('la ruta no deberia existir', () => {
    const resultado2 = functions.pathAbsolute("C:/Users/Laboratoria/Documents/13444365gfg")
    console.log("resultado", resultado2.message)
    expect(resultado2.message).toMatch("La ruta no existe")
  })

});

describe('pathDirectory', () => {
  test('debería ser una función', () => {
    expect(typeof functions.pathDirectory).toBe('function');
  });
  test('deberia ser un Array', () => {
    let arrayPaths = functions.pathDirectory("C:/Users/Laboratoria/Documents/Laboratoria bootcamp/TestDirectory")
    expect(arrayPaths).toEqual(mockArrayRoutesMD);
  });

});

describe('ReadMDFile', () => {
  test('debería ser una función', () => {
    expect(typeof functions.ReadMDFile).toBe('function');
  });
  test.only('deberia ser un Array de Objetos', () => {
    expect(mockArrayLinks).toStrictEqual(functions.ReadMDFile(mockArrayRoutesMD));
  });

});

// describe('mdLinks', () => {
  // test('debería ser una función', () => {
  //   expect(typeof mdLinks.MDLinks).toBe('function');
  // });
//   test('Debería darme un array de objetos', () => {
//     expect()
//   });
// test('Debería darme un array de objetos validados', () => {
  //     expect()
  //   });

// });

const mockArrayRoutesMD = [
  'C:\\Users\\Laboratoria\\Documents\\Laboratoria bootcamp\\TestDirectory\\Nueva carpeta\\README.md',
  'C:\\Users\\Laboratoria\\Documents\\Laboratoria bootcamp\\TestDirectory\\Nueva carpeta (2)\\Nueva carpeta\\README.md',
  'C:\\Users\\Laboratoria\\Documents\\Laboratoria bootcamp\\TestDirectory\\Nueva carpeta (4)\\README.md'
]

const mockArrayLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
    text: '(if-else | switch | operador ternario)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: '(parámetros | argumentos | valor de retorno)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
    text: '(filter | map | sort | reduce)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
    text: 'import',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
    text: 'export',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'fs',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.npmjs.com/',
    text: 'npm',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: '(CommonJS)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://docs.npmjs.com/files/package.json',
    text: 'Configuración de package.json.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'Configuración de npm-scripts',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/getting-started',
    text: 'Testeo unitario.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/asynchronous',
    text: 'Testeo asíncrono.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/manual-mocks',
    text: 'Uso de librerias de Mock.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',
    text: 'Códigos de status HTTP',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
    text: 'Recursión.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://jestjs.io/',
    text: 'Jest',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de npm install acá',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: 'course-parser',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (RegExp)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/jsdom/jsdom',
    text: 'JSDOM',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    text: 'Cheerio',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'http://community.laboratoria.la/c/js',
    text: 'foro de la comunidad',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'Node.js http.get - Documentación oficial',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
    text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
    text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
    text: 'Asíncronía en js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
    text: 'NPM',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Crear módulos en Node.js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  },
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md'
  }
]

const mockArrayLinksValidations = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
    text: '(if-else | switch | operador ternario)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: '(parámetros | argumentos | valor de retorno)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
    text: '(filter | map | sort | reduce)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
    text: 'import',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
    text: 'export',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'fs',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.npmjs.com/',
    text: 'npm',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: '(CommonJS)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/files/package.json',
    text: 'Configuración de package.json.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'Configuración de npm-scripts',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/getting-started',
    text: 'Testeo unitario.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/asynchronous',
    text: 'Testeo asíncrono.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/manual-mocks',
    text: 'Uso de librerias de Mock.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',
    text: 'Códigos de status HTTP',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
    text: 'Recursión.',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/',
    text: 'Jest',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de npm install acá',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: 'course-parser',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (RegExp)',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/jsdom/jsdom',
    text: 'JSDOM',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    text: 'Cheerio',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'http://community.laboratoria.la/c/js',
    text: 'foro de la comunidad',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'Node.js http.get - Documentación oficial',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
    text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
    text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
    text: 'Asíncronía en js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
    text: 'NPM',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Crear módulos en Node.js',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:/Users/Laboratoria/Documents/Laboratoria bootcamp/BOG002-md-links/README.md',
    status: 200,
    statusText: 'OK'
  }
];
