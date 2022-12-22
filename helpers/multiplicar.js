const fs = require('fs');
const color = require('colors');
const crearArchivo = async (base, listar, hasta = base) => {
    try {

        console.log('hasta', hasta);
        let salida, consola = '';
        const nombreArchivo = `tabla-${base}.txt`;
        for (let multiplier = base; multiplier <= hasta; multiplier++) {
            for (let index = 1; index <= 10; index++) {
                salida += `${multiplier} x ${index} = ${base * index} \n`;
                consola += `${multiplier} ${'x'.america} ${index} ${'='.america} ${base * index} \n`;
            }
            salida += '\n';
        }

        await fs.writeFileSync(`./ouput/${nombreArchivo}`, salida);
        if (listar) {
            console.log('========================================'.green);
            console.log('               Tabla del: '.yellow, color.blue(base), '           ');
            console.log('========================================'.green);
            console.log(consola);
        }

        return nombreArchivo;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}