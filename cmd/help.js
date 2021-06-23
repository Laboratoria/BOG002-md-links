const menus = {
  main: `
    md-links [path] <options>
        busca un archivo .md o carpeta en la ruta y muestra un listado de los links
    md-links [cmd] <options>
        version ............ muestra la version actual del paquete
        help ............... muestra el menu de ayuda
    `,

  path: `
    md-links [path] <options>
        validate .............. valida el estado de los links encontrados en el/los archivo(s)
        stats ................. muestra la cantidad de links encontrados y cuantos de estos son unicos`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}