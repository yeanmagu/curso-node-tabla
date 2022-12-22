const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');
console.clear();
//const base = 1.097677654354678;

/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 9] = arg3.split('=');
console.log(process.argv);
console.log(base); */

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));