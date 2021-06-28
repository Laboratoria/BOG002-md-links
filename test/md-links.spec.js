const mdLinks = require('../index.js');
describe('mdLinks', () => {
  it('Debe retornar un error',  () => {
    expect.assertions(1);
    return mdLinks('Users/julieth/Documents/Laboratoria/Duplas/MDLinks/README.md').then(data => {
      //expect(data).toBe('La ruta Users/julieth/Documents/Laboratoria/Duplas/MDLinks/README.md no existe');
    }).catch(error => {
      expect(error.message).toBe('La ruta Users/julieth/Documents/Laboratoria/Duplas/MDLinks/README.md no existe');
    });
  });
  it('Debe retornar un arreglo de objetos',  () => {
    expect.assertions(1);
    return mdLinks('./README.md').then(data => {
      expect(typeof data).toBe('object');
    });
  });
  it('Debe retornar un arreglo',  () => {
    expect.assertions(1);
    return mdLinks('./README.md').then(data => {
      expect(data.length).toBe(66);
    });
  });
  it('Lectura de carpetas',  () => {
    expect.assertions(1);
    return mdLinks('../SocialNetwork',{validate:true}).then(data => {
      expect(typeof data).toBe('object');
    });
  });

 /* it('should...',
    () => {
    console.log(mdLinks('../README.md'));
    console.log(mdLinks('/Users/julieth/Documents/Laboratoria/Duplas/MDLinks/README.md'))
    console.log(mdLinks('/julieth/Documents/Laboratoria/Duplas/MDLinks/README.md'))
    console.log(mdLinks('Users/julieth/Documents/Laboratoria/Duplas/MDLinks/README.md'))
    console.log(mdLinks('../documentos/lolestonoexiste.txt'))
    console.log(mdLinks('./README.md'))
  });*/

});

