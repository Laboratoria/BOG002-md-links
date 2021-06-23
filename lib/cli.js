#!/usr/bin/env node

const chalk = require('chalk');
const minimist = require('minimist');
const mdLinks = require('../index');

module.exports = (function() {
    const args = minimist(process.argv.slice(2));
    let path = args._[0] || 'help';

    let options = {
        validate: args.validate ? true : false,
        stats: args.stats ? true : false,
    };
    if (args.version || args.v) {
        path = 'version'
    }
    if (args.help || args.h) {
        path = 'help'
    }
    switch (path) {
        case 'version':
            require('../cmd/version')(args)
            break
        case 'help':
            require('../cmd/help')(args)
            break
        default:
            require('../index')(path,options).then((res) => {
                if(options.stats){
                    console.log( chalk.cyan(`Links: ${res.length}`) );
                } else {
                    res.forEach(link => {
                        console.log(chalk.gray(link.file), chalk.cyan(link.href), link.text);
                        if(link.ok && link.status) {
                            let status = link.ok === 'ok' ? chalk.green(link.ok, link.status) : chalk.red(link.ok, link.status);
                            console.log(status)
                        } 
                    });
                } 
            }).catch((error) =>{
                console.log(chalk.yellow(error.message))
            });
            break 
    }   
})()
