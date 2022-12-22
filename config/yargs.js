const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: ' es la base para la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: ' muestra el resultado en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            describe: 'Permite ampliar las tablas de multiplicación resultantes'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un número';
        }
        return true;
    })
    .argv

module.exports = argv;